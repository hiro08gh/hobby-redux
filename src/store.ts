type Listener<S> = (newState: S) => void;

export type Action<T extends string, P = unknown> = {
  type: T;
  payload?: P;
};

type Reducer<T, S extends Action<string>> = (
  state: T | undefined,
  action: S
) => T;

export class Store<T, S extends Action<string>> {
  private state: T | undefined;
  private reducer: Reducer<T, S>;
  private listeners: Listener<T>[];

  constructor(reducer: Reducer<T, S>, initialState?: T) {
    this.state = initialState;
    this.reducer = reducer;
    this.listeners = [];
  }

  public getState = (): T | undefined => {
    return this.state;
  };

  public dispatch = (action: S): void => {
    this.state = this.reducer(this.state, action);
    for (const listener of this.listeners) {
      listener(this.state);
    }
  };

  public subscribe = (listener: Listener<T>): (() => void) => {
    this.listeners.push(listener);
    return () => this.unsubscribe(listener);
  };

  public unsubscribe = (listener: Listener<T>): void => {
    this.listeners = this.listeners.filter((l) => l !== listener);
  };
}
