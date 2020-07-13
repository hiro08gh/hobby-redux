import store from '../store';
import { counterReducer } from './helper/counterReducer';
import { INCREMENT, DECREMENT } from './helper/actionTypes';

describe('store.ts', () => {
  let store;
  beforeEach(() => {
    store = store.createStore(counterReducer);
  });

  it('Initial state', () => {
    expect(store.getState().toBe(0));
  });

  it('INCREMENT and DECREMENT test', () => {
    store.dispatch({ type: INCREMENT });
    expect(store.getState()).toBe(1);
    store.dispatch({ type: INCREMENT });
    expect(store.getState()).toBe(2);
    store.dispatch({ type: DECREMENT });
    expect(store.getState()).toBe(1);
  });
});
