import {
  dec,
  getAccUsrFulfilled,
  getAccUsrPending,
  getAccUsrRejected,
  inc,
  incByValue,
} from "../actions";

export const accountReducer = (state = { amount: 1 }, action) => {
  switch (action.type) {
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };
    case incByValue:
      return { amount: state.amount + Number(action.payload) };
    case getAccUsrFulfilled:
      return { amount: action.payload };
    case getAccUsrPending:
      return { ...state, pending: true };
    case getAccUsrRejected:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
