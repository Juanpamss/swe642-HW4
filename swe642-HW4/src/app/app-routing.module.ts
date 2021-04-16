import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SurveyComponent} from "./survey/survey.component";
import {VolgenauComponent} from "./volgenau/volgenau.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'volgenau', component: VolgenauComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
