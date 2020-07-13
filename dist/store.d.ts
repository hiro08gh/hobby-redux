declare type Listener<State> = (newState: State) => void;
declare type Reducer<T, U> = (state: T, action: U) => T;
export default class Store<T, S> {
    private state;
    private reducer;
    private listener;
    constructor(reducer: Reducer<T, S>, state?: any);
    getState: () => T;
    dispatch: (action: any) => void;
    subscribe: (listener: Listener<T>) => void;
    unsubscribe(listener: Listener<T>): void;
}
export {};
