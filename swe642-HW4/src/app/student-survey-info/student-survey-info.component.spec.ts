import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSurveyInfoComponent } from './student-survey-info.component';

describe('StudentSurveyInfoComponent', () => {
  let component: StudentSurveyInfoComponent;
  let fixture: ComponentFixture<StudentSurveyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSurveyInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSurveyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
