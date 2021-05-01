import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerAcknowledgementComponent } from './winner-acknowledgement.component';

describe('WinnerAcknowledgementComponent', () => {
  let component: WinnerAcknowledgementComponent;
  let fixture: ComponentFixture<WinnerAcknowledgementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnerAcknowledgementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerAcknowledgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
