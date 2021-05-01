import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SurveyComponent} from "./survey/survey.component";
import {VolgenauComponent} from "./volgenau/volgenau.component";
import {WinnerAcknowledgementComponent} from "./winner-acknowledgement/winner-acknowledgement.component";
import {SimpleAcknowledgementComponent} from "./simple-acknowledgement/simple-acknowledgement.component";
import {StudentSurveyInfoComponent} from "./student-survey-info/student-survey-info.component";
import {NoStudentErrorComponent} from "./no-student-error/no-student-error.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Survey', component: SurveyComponent },
  { path: 'Volgenau', component: VolgenauComponent },
  { path: 'WinnerAcknowledgement', component: WinnerAcknowledgementComponent },
  { path: 'SimpleAcknowledgement', component: SimpleAcknowledgementComponent },
  { path: 'StudentSurveyInfo', component: StudentSurveyInfoComponent },
  { path: 'SurveyNotFound', component: NoStudentErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
