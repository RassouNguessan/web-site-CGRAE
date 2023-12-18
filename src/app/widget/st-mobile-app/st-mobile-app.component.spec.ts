import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StMobileAppComponent } from './st-mobile-app.component';

describe('StMobileAppComponent', () => {
  let component: StMobileAppComponent;
  let fixture: ComponentFixture<StMobileAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StMobileAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StMobileAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
