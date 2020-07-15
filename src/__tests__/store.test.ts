import Store from '../store';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

/* eslint-disable */
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

describe('store.ts', () => {
  let store;
  beforeEach(() => {
    store = new Store(reducer);
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
