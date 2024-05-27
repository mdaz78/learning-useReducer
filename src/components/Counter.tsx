import { useState } from "react";

const Counter = ({ initialCount }: { initialCount: number }) => {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setValueToAdd(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCount(count + valueToAdd);
  };

  return (
    <div>
      <div>
        <h1>Count is {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <br />

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="add-value">Add a lot</label>
            <input
              type="number"
              id="add-value"
              value={valueToAdd || ""}
              onChange={handleChange}
            />
            <button>Add a lot</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Counter;
