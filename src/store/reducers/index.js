import { combineReducers } from "redux";
import login from "./loginReducer";
import todo from "./todoReducer";
import expense from "./expenseReducer";
import passwordGenerator from "./passwordGeneratorReducer";
import general from "./general";

const appReducer = combineReducers({
  login,
  todo,
  expense,
  passwordGenerator,
  general,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
