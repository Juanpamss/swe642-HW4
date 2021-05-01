import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {StudentSurvey} from "../models/StudentSurvey.model";

@Injectable({
  providedIn: 'root'
})
export class StudentSurveyService {

  constructor(private httpClient: HttpClient) { }

  //Get all student surveys ids completed
  getStudentSurveyList(): Observable<any>{

    return this.httpClient.get("http://localhost:8080/swe642-HW4/StudentSurveyListServlet")
  }

  //Get a completed student survey by id
  getStudentSurveyById(id): Observable<any>{

    return this.httpClient.get("http://localhost:8080/swe642-HW4/StudentSurveyServlet?studentId=" + id)
  }

  //Insert a new survey into the DB
  postStudentSurvey(surveyData: StudentSurvey): Observable<any> {

    let httpParams = new HttpParams()
      .set('name', surveyData.name)
      .set('studentId', surveyData.studentId)
      .set('address', surveyData.address)
      .set('city', surveyData.city)
      .set('state', surveyData.state)
      .set('zip', surveyData.zip.toString())
      .set('telephone', surveyData.telephone)
      .set('email', surveyData.email)
      .set('date', surveyData.date)
      .set('url', surveyData.url)
      .set('data', surveyData.data)
      .set('gradMonth', surveyData.gradMonth)
      .set('gradYear', surveyData.gradYear.toString())
      .set('preferences', surveyData.preferences)
      .set('interested', surveyData.interested)
      .set('recommend', surveyData.recommend)
      .set('comments', surveyData.comments)

    const body = JSON.stringify(surveyData);

    return this.httpClient.post("http://localhost:8080/swe642-HW4/StudentSurveyServlet",body, {
      params: httpParams
    })
  }
}
