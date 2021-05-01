import { Component, OnInit } from '@angular/core';
import {StudentSurveyService} from "../services/student-survey.service";
import {StudentSurvey} from "../models/StudentSurvey.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor(
    private _studentSurvey: StudentSurveyService,
    private router: Router
  ) { }

  studentSurvey: StudentSurvey = new StudentSurvey()

  ngOnInit(): void {
  }

  submitForm(surveyData){

    let checkboxValues = []
    let checkboxes = document.getElementsByName('preferences');
    // @ts-ignore
    for (let checkbox of checkboxes) {
      if (checkbox.checked){
        checkboxValues.push(checkbox.value);
      }
    }

    //Parse and assign each input from the survey
    this.studentSurvey.name = surveyData.value.name;
    this.studentSurvey.studentId = surveyData.value.studentId;
    this.studentSurvey.address = surveyData.value.address;
    this.studentSurvey.city = surveyData.value.city;
    this.studentSurvey.state = surveyData.value.state;
    this.studentSurvey.zip = surveyData.value.zip;
    this.studentSurvey.telephone = surveyData.value.telephone;
    this.studentSurvey.email = surveyData.value.email;
    this.studentSurvey.date = surveyData.value.date;
    this.studentSurvey.url = surveyData.value.url;
    this.studentSurvey.data = surveyData.value.data;
    this.studentSurvey.gradMonth = surveyData.value.gradMonth;
    this.studentSurvey.gradYear = surveyData.value.gradYear;
    this.studentSurvey.preferences = checkboxValues.join(",");
    this.studentSurvey.interested = surveyData.value.interested;
    this.studentSurvey.recommend = surveyData.value.recommend;
    this.studentSurvey.comments = surveyData.value.comments;

    this._studentSurvey.postStudentSurvey(this.studentSurvey).subscribe(
      data => {
        console.log("Success!")
        this.redirect(surveyData.value.data)
      }
    )
  }

  redirect(data) {

    let mean = this.calculateMean(data)
    let standardDeviation = this.calculateStandardDeviation(data)

    if(this.calculateMean(data) >= 90) {

      this.router.navigate(['/WinnerAcknowledgement',{mean: mean, standardDeviation: standardDeviation}])

    }else {

      this.router.navigate(['/SimpleAcknowledgement', {mean: mean, standardDeviation: standardDeviation}])
    }

    //window.location.reload()
  }

  calculateMean(numbers) {

    let mean = 0;
    let stringNumbers = numbers.length > 0 ? numbers.split(",") : [];

    for (let i = 0; i < stringNumbers.length; i++) {
      mean += parseInt(stringNumbers[i]);
    }

    return mean/stringNumbers.length;
  }

 calculateStandardDeviation(numbers) {

    let mean = this.calculateMean(numbers);

   let stringNumbers = numbers.length > 0 ? numbers.split(",") : [];

    let sumOfSquaredDifferences = 0;

    for (let i = 0; i < stringNumbers.length; i++) {
      sumOfSquaredDifferences += Math.pow(parseInt(stringNumbers[i]) - mean, 2);
    }

    return Math.sqrt(sumOfSquaredDifferences/stringNumbers.length);
  }

}
