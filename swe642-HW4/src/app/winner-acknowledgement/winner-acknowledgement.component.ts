import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StudentSurveyService} from "../services/student-survey.service";

@Component({
  selector: 'app-winner-acknowledgement',
  templateUrl: './winner-acknowledgement.component.html',
  styleUrls: ['./winner-acknowledgement.component.css']
})
export class WinnerAcknowledgementComponent implements OnInit {

  constructor(
    private _studentSurvey: StudentSurveyService,
    private route: ActivatedRoute
  ) { }

  mean = ""
  standardDeviation = ""
  studentSurveyList: String[]

  ngOnInit(): void {
    this.mean = this.route.snapshot.paramMap.get('mean') !== null ? this.route.snapshot.paramMap.get('mean') : ""
    this.standardDeviation = this.route.snapshot.paramMap.get('standardDeviation') !== null ? this.route.snapshot.paramMap.get('standardDeviation') : ""
    this._studentSurvey.getStudentSurveyList().subscribe(
      data => {
        this.studentSurveyList = data
      }
    )
  }

}
