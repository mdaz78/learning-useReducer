import { produce } from "immer";
import { useReducer } from "react";

interface State {
  count: number;
  valueToAdd: number;
}

interface Action {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

const actions = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  ADD_VALUE: "ADD_VALUE",
  SET_VALUE_TO_ADD: "SET_VALUE_TO_ADD",
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case actions.INCREMENT:
      state.count += 1;
      return;
    case actions.DECREMENT:
      state.count -= 1;
      return;
    case actions.SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    case actions.ADD_VALUE:
      state.count += state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      return;
  }
};

const Counter = ({ initialCount }: { initialCount: number }) => {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  console.log(state);

  const increment = () => {
    dispatch({
      type: actions.INCREMENT,
    });
  };

  const decrement = () => {
    dispatch({
      type: actions.DECREMENT,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    dispatch({
      type: actions.SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: actions.ADD_VALUE,
    });
  };

  return (
    <div>
      <div>
        <h1>Count is {state.count}</h1>
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
              value={state.valueToAdd || ""}
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
