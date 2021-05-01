import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoStudentErrorComponent } from './no-student-error.component';

describe('NoStudentErrorComponent', () => {
  let component: NoStudentErrorComponent;
  let fixture: ComponentFixture<NoStudentErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoStudentErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoStudentErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
