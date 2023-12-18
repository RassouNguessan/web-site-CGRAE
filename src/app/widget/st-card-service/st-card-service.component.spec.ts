import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StCardServiceComponent } from './st-card-service.component';

describe('StCardServiceComponent', () => {
  let component: StCardServiceComponent;
  let fixture: ComponentFixture<StCardServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StCardServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StCardServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
