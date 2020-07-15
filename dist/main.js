"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = __importDefault(require("./store"));
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
const store = new store_1.default(reducer);
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
