import { describe, it, expect, vi } from "vitest";
import { Store } from "../store";
import type { Action } from "../store";

const counterReducer = (
  state: number | undefined,
  action: Action<string, number>
): number => {
  if (state === undefined) return 0;
  switch (action.type) {
    case "INCREMENT":
      return state + (action.payload ?? 1);
    case "DECREMENT":
      return state - (action.payload ?? 1);
    default:
      return state;
  }
};

describe("Store", () => {
  it("should initialize with initialState if provided", () => {
    const store = new Store(counterReducer, 10);
    expect(store.getState()).toBe(10);
  });

  it("should initialize with undefined state if no initialState is provided", () => {
    const store = new Store(counterReducer);
    expect(store.getState()).toBe(undefined);
  });

  it("should update state with dispatch", () => {
    const store = new Store(counterReducer, 0);
    store.dispatch({ type: "INCREMENT" });
    expect(store.getState()).toBe(1);

    store.dispatch({ type: "INCREMENT", payload: 5 });
    expect(store.getState()).toBe(6);

    store.dispatch({ type: "DECREMENT", payload: 2 });
    expect(store.getState()).toBe(4);
  });

  it("should notify listeners when state changes", () => {
    const store = new Store(counterReducer, 0);
    const listener = vi.fn();

    store.subscribe(listener);
    store.dispatch({ type: "INCREMENT" });

    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenCalledWith(1);
  });

  it("should unsubscribe listeners correctly", () => {
    const store = new Store(counterReducer, 0);
    const listener = vi.fn();

    const unsubscribe = store.subscribe(listener);
    store.dispatch({ type: "INCREMENT" });

    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenCalledWith(1);

    unsubscribe();

    store.dispatch({ type: "INCREMENT" });

    expect(listener).toHaveBeenCalledTimes(1);
  });
});
