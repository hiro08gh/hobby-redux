import Store from './store';

type CounterAction = { type: 'INCREMENT' } | { type: 'DECREMENT' };

const reducer = (state: any = 0, action: CounterAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const store = new Store(reducer);

const incrementAction = { type: 'INCREMENT' };
const decrementAction = { type: 'DECREMENT' };

store.subscribe(fn);

function fn() {
  console.log(store.getState());
}

store.dispatch(incrementAction);
// => 1
store.dispatch(incrementAction);
// => 2
store.dispatch(decrementAction);
// => 1
