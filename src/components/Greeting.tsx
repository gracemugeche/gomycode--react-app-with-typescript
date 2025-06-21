import React from "react";

// 1. Define a type for props
type GreetingProps = {
  name: string;
};

// 2. Use the props type in the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
