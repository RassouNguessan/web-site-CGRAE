import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StCardServiceVariantComponent } from './st-card-service-variant.component';

describe('StCardServiceVariantComponent', () => {
  let component: StCardServiceVariantComponent;
  let fixture: ComponentFixture<StCardServiceVariantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StCardServiceVariantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StCardServiceVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
