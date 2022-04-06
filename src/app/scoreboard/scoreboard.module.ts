import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { scoreboardFeatureKey, scoreboardReducer } from '../reducers/scoreboard.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(scoreboardFeatureKey, scoreboardReducer)
  ]
})
export class ScoreboardModule { }
