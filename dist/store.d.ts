declare type Listener<State> = (newState: State) => void;
declare type Fixme<T = any> = any;
declare type Reducer<T, S> = (state: T, action: S) => T;
export default class Store<T, S> {
    private state;
    private reducer;
    private listener;
    constructor(reducer: Reducer<T, S>, state?: Fixme);
    getState: () => T;
    dispatch: (action: Fixme) => void;
    subscribe: (listener: Listener<T>) => void;
    unsubscribe: (listener: Listener<T>) => void;
}
export {};
