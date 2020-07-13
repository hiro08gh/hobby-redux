import { INCREMENT, DECREMENT } from './actionTypes';

export const counterReducer = (state: number, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
