import { Component } from '@angular/core';

import {CounterState} from "../store/reducers/counter.reducer";
import {Store} from "@ngrx/store";
import {CounterActions} from "../store/reducers/counter.actions";

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  constructor(private store:Store<CounterState>) {}

  increment(by:number=1) {
    this.store.dispatch(CounterActions.IncrementBy({by}));
  }

  decrement(by:number=1) {
    this.store.dispatch(CounterActions.DecrementBy({by}));
  }
}
