import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SurveyComponent } from './survey/survey.component';
import { VolgenauComponent } from './volgenau/volgenau.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import { WinnerAcknowledgementComponent } from './winner-acknowledgement/winner-acknowledgement.component';
import { SimpleAcknowledgementComponent } from './simple-acknowledgement/simple-acknowledgement.component';
import { StudentSurveyInfoComponent } from './student-survey-info/student-survey-info.component';
import { NoStudentErrorComponent } from './no-student-error/no-student-error.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SurveyComponent,
    VolgenauComponent,
    FooterComponent,
    NavbarComponent,
    WinnerAcknowledgementComponent,
    SimpleAcknowledgementComponent,
    StudentSurveyInfoComponent,
    NoStudentErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
