import Counter from "./components/counter";
import Greeting from "./components/Greeting";

export default function App() {
  return (
    <div>
      <h1>Welcome to My TypeScript React App</h1>
      {/* Greeting component with a name prop */}
      <Greeting name="grace" />
      {/* Counter component with a starting value */}
      <Counter initialCount={0} />
    </div>
  );
}
