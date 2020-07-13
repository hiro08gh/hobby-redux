type Listener<State> = (newState: State) => void;

/* eslint-disable */
type Fixme<T = any> = any;

type Action<T extends string> = {
  type: T;
  payload?: T;
};

type Reducer<T, S> = (state: T, action: S) => T;

export default class Store<T, S> {
  private state: T;
  private reducer: Reducer<T, S>;
  private listener: Array<Listener<T>>;

  constructor(reducer: Reducer<T, S>, state?: Fixme) {
    this.state = state;
    this.reducer = reducer;
    this.listener = [];
  }

  public getState = (): T => {
    return this.state;
  };

  public dispatch = (action: Fixme): void => {
    this.state = this.reducer(this.state, action);
    this.listener.forEach((s) => s(this.state));
  };

  public subscribe = (listener: Listener<T>): void => {
    const index = this.listener.push(listener);
    if (index === -1) {
      this.listener.push(listener);
    }
  };

  public unsubscribe = (listener: Listener<T>): void => {
    const index = this.listener.indexOf(listener);
    if (index !== -1) {
      this.listener.splice(index, 1);
    }
  };
}
