"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
class Store {
    constructor(reducer, initialState) {
        this.getState = () => {
            return this.state;
        };
        this.dispatch = (action) => {
            this.state = this.reducer(this.state, action);
            for (const listener of this.listeners) {
                listener(this.state);
            }
        };
        this.subscribe = (listener) => {
            this.listeners.push(listener);
            return () => this.unsubscribe(listener);
        };
        this.unsubscribe = (listener) => {
            this.listeners = this.listeners.filter((l) => l !== listener);
        };
        this.state = initialState;
        this.reducer = reducer;
        this.listeners = [];
    }
}
exports.Store = Store;
