import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { scoreboardReducer } from './reducers/scoreboard.reducer';
import { ScoreboardModule } from './scoreboard/scoreboard.module';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({count: counterReducer, game: scoreboardReducer}),
    ScoreboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
