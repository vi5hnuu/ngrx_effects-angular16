import {createReducer, on} from "@ngrx/store";
import {CounterActions} from "./counter.actions";

export interface CounterState {
  count: number;
}

const initialCounterState: CounterState = {
  count: 0
};
export const counterReducer = createReducer(initialCounterState,
  on(CounterActions.IncrementBy, (state: CounterState,payload:{by:number}): CounterState =>  ({...state, count: state.count + payload.by})),
  on(CounterActions.DecrementBy, (state: CounterState,payload:{by:number}): CounterState => ({...state, count: state.count - payload.by})),
);
