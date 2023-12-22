import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StProgressBarComponent } from './st-progress-bar.component';

describe('StProgressBarComponent', () => {
  let component: StProgressBarComponent;
  let fixture: ComponentFixture<StProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StProgressBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
