import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolgenauComponent } from './volgenau.component';

describe('VolgenauComponent', () => {
  let component: VolgenauComponent;
  let fixture: ComponentFixture<VolgenauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolgenauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolgenauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
