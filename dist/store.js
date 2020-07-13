"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Store {
    constructor(reducer, state) {
        this.getState = () => {
            return this.state;
        };
        this.dispatch = (action) => {
            this.state = this.reducer(this.state, action);
            this.listener.forEach((s) => s(this.state));
        };
        this.subscribe = (listener) => {
            const index = this.listener.push(listener);
            if (index === -1) {
                this.listener.push(listener);
            }
        };
        this.state = state;
        this.reducer = reducer;
        this.listener = [];
    }
    unsubscribe(listener) {
        const index = this.listener.indexOf(listener);
        if (index !== -1) {
            this.listener.splice(index, 1);
        }
    }
}
exports.default = Store;
