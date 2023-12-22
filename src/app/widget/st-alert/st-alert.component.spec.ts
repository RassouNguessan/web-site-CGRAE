import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StAlertComponent } from './st-alert.component';

describe('StAlertComponent', () => {
  let component: StAlertComponent;
  let fixture: ComponentFixture<StAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StAlertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
