import { configureStore } from "react-redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCEREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
export const store = configureStore(reducer);
