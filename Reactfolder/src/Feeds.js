import React, { useEffect, useState } from "react";

export default function Feeds() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
    console.log("Count incremented and component Updated");
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
    console.log("Count decremented and component Updated");
  };

  useEffect(() => {
    console.log("Feeds Component Mounted", Date());
    return () => {
      console.log("Feeds Component Unmounted");
    };
  }, []);

  return (
    <div>
      <div>Feeds</div>
      <div>
        <h2>Counter</h2>
        <button onClick={() => decrement()}>-</button>
        {count}
        <button onClick={() => increment()}>+</button>
      </div>
    </div>
  );
}
