import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {CounterOutputComponent} from "./counter-output/counter-output.component";
import {CounterControlsComponent} from "./counter-controls/counter-controls.component";
import {StoreModule} from "@ngrx/store";
import {reducers, metaReducers} from "./store/reducers";
import {AsyncPipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    CounterOutputComponent,
    CounterControlsComponent,
  ],
  imports: [BrowserModule, StoreModule.forRoot(reducers, {
    metaReducers
  })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
