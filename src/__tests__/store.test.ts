import { Store } from '../store';

// actions type
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_TODO = 'ADD_TODO';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const todoReducer = (state: any = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.text }];
    default:
      return state;
  }
};

describe('store.ts', () => {
  describe('counter', () => {
    let store;
    beforeEach(() => {
      store = new Store(counterReducer);
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

  describe('todo', () => {
    let store;
    beforeEach(() => {
      store = new Store(todoReducer);
    });
    it('ADD_TODO test', () => {
      store.dispatch({ type: ADD_TODO, text: 'text' });
      expect(store.getState()).toEqual([{ text: 'text' }]);
      store.dispatch({ type: ADD_TODO, text: 'text2' });
      expect(store.getState()).toEqual([{ text: 'text' }, { text: 'text2' }]);
    });
  });
});
