import { useState } from "react";

// Props interface to type the incoming prop
interface CounterProps {
  initialCount: number; // The number the counter starts from
}

// A basic functional component using hooks and props
function Counter(props: CounterProps) {
  const [count, setCount] = useState<number>(props.initialCount); // Track current count

  // Increments the count by 1
  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Value: {count}</p>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default Counter;
