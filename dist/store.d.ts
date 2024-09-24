type Listener<S> = (newState: S) => void;
export type Action<T extends string, P = unknown> = {
    type: T;
    payload?: P;
};
type Reducer<T, S extends Action<string>> = (state: T | undefined, action: S) => T;
export declare class Store<T, S extends Action<string>> {
    private state;
    private reducer;
    private listeners;
    constructor(reducer: Reducer<T, S>, initialState?: T);
    getState: () => T | undefined;
    dispatch: (action: S) => void;
    subscribe: (listener: Listener<T>) => (() => void);
    unsubscribe: (listener: Listener<T>) => void;
}
export {};
