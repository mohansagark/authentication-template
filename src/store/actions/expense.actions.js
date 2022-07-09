import { GET_EXPENSE_LIST, RESET_EXPENSE_LIST, SET_EXPENSE_LIST } from "./types";

export const getExpenseList = () => {
  return {
    type: GET_EXPENSE_LIST,
  };
};

export const setExpenseList = (payload) => {
  return {
    type: SET_EXPENSE_LIST,
    payload : payload ? payload : {},
    
  };
};

export const resetExpenseList = () => {
  return {
    type: RESET_EXPENSE_LIST,
  };
};
