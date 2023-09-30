import {createAction, props} from "@ngrx/store";

export const CounterActions={
  IncrementBy:createAction('[Counter] increment counter by x',props<{by:number}>()),
  DecrementBy:createAction('[Counter] decrement counter by x',props<{by:number}>())
}
