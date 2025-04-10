import React, { useState } from "react";

const ExpensiveComponent = React.memo(({ count }) => {
  console.log("Rendering ExpensiveComponent...");
  return <h1>Count: {count}</h1>;
});

function Rememo() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>
      <button onClick={() => setShow((prev) => !prev)}>Toggle Component</button>
      {show && <ExpensiveComponent count={count} />}
    </div>
  );
}

export default Rememo;
