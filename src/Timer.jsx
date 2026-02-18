import React, { useRef, useState } from "react";

const timer = () => {
  const [number, setNumber] = useState(0);
  const interValRef = useRef(null);

  const forward = () => {
    clearInterval(interValRef.current);
    interValRef.current = setInterval(() => {
      setNumber((prev) => prev + 1);
    }, 1000);
  };

  const backward = () => {
    clearInterval(interValRef.current);
    interValRef.current = setInterval(() => {
      setNumber((prev) => prev - 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(interValRef.current);
    setNumber(0);
  };

  return (
    <div>
      <h2>{number}</h2>
      <button onClick={forward}>Forward</button>
      <button onClick={backward}>Backward</button>
      <button onClick={stop}>Reset</button>
    </div>
  );
};

export default timer;
