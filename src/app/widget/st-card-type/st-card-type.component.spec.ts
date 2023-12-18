import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StCardTypeComponent } from './st-card-type.component';

describe('StCardTypeComponent', () => {
  let component: StCardTypeComponent;
  let fixture: ComponentFixture<StCardTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StCardTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StCardTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
