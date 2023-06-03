import axios from "axios";

export const inc = "account/increment";
export const dec = "account/decrement";
export const incByValue = "account/incrementByValue";
export const getAccUsrPending = "account/getUser/pending";
export const getAccUsrFulfilled = "account/getUser/fulfilled";
export const getAccUsrRejected = "account/getUser/rejected";
export const incBonus = "bonus/increaseBonus";

export function getUserAccount(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getAccountUsrPending());
      const { data } = await axios.get(`http://localhost:8080/account/${id}`);
      dispatch(getAccountUsrFulfilled(data.amount));
    } catch (error) {
      dispatch(getAccountUsrRejected(error?.message));
    }
  };
}

export function getAccountUsrFulfilled(value) {
  return { type: getAccUsrFulfilled, payload: value, pending: false };
}
export function getAccountUsrPending() {
  return { type: getAccUsrPending };
}
export function getAccountUsrRejected(value) {
  return { type: getAccUsrRejected, error: value, pending: false };
}
export const increment = () => {
  return { type: inc };
};
export const decremnt = () => {
  return { type: dec };
};
export const incrementByAmount = (value) => {
  return { type: incByValue, payload: value };
};
export function increaseBonus() {
  return { type: incBonus };
}
