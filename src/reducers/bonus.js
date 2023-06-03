import { incBonus } from "../actions";

export const bonusReducer = (state = { points: 0 }, action) => {
  switch (action.type) {
    case incBonus:
      return { points: state.points + 1 };
    default:
      return state;
  }
};
