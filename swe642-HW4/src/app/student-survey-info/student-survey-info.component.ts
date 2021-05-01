import { Component, OnInit } from '@angular/core';
import {StudentSurveyService} from "../services/student-survey.service";
import {StudentSurvey} from "../models/StudentSurvey.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-student-survey-info',
  templateUrl: './student-survey-info.component.html',
  styleUrls: ['./student-survey-info.component.css']
})
export class StudentSurveyInfoComponent implements OnInit {

  constructor(
    private _studentSurvey: StudentSurveyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  studentSurveyData : StudentSurvey = new StudentSurvey()
  preferenceList = null

  ngOnInit(): void {
    this._studentSurvey.getStudentSurveyById(this.route.snapshot.queryParamMap.get('studentId')).subscribe(
      data => {
        if(data == null){
          this.router.navigate(['/SurveyNotFound'])
        }else{
          this.studentSurveyData = data
          this.preferenceList = this.studentSurveyData.preferences.split(",")
        }
      }
    )
  }

}
