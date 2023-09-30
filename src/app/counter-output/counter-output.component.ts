import { Component, OnDestroy, OnInit } from '@angular/core';
import {Observable} from "rxjs";

import {Store} from "@ngrx/store";
import {CounterState} from "../store/reducers/counter.reducer";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter$!:Observable<CounterState>;

  constructor(private store:Store<{'counterSlice': CounterState }>) {
  }

  ngOnInit(): void {
    this.counter$=this.store.select(state=>state.counterSlice);
  }

  ngOnDestroy(): void {}
}
