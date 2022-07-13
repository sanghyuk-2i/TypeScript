import React, { useState } from "react";

const Counter = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const increasement = () => setCount(count + 1);
  const decreasement = () => setCount(count - 1);

  return (
    <>
      <div>{count}</div>
      <button onClick={increasement}>+</button>
      <button onClick={decreasement}>-</button>
    </>
  );
};

export default Counter;
