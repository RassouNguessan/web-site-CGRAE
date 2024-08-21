import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StProgressStepperComponent } from './st-progress-stepper.component';

describe('StProgressStepperComponent', () => {
  let component: StProgressStepperComponent;
  let fixture: ComponentFixture<StProgressStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StProgressStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StProgressStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
