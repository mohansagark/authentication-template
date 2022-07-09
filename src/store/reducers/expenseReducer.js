import {
  GET_EXPENSE_LIST,
  RESET_EXPENSE_LIST,
  SET_EXPENSE_LIST,
} from "../actions/types";

const initialState = {
  list: [],
  total : 0
};

const expense = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXPENSE_LIST:
      let temp = [...state.list];
      temp.push(action.payload);
      let totalTemp = parseInt(state.total) + parseInt(action.payload.expenseAmount);
      return {
        ...state,
        list: temp,
        total: totalTemp,
      };

    case GET_EXPENSE_LIST:
      return state.list;

    case RESET_EXPENSE_LIST:
      return { ...state, list: [], total:0 };

    default:
     return state;
  }
};

export default expense;
