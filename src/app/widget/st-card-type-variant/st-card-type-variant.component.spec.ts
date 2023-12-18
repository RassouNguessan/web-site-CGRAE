import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StCardTypeVariantComponent } from './st-card-type-variant.component';

describe('StCardTypeVariantComponent', () => {
  let component: StCardTypeVariantComponent;
  let fixture: ComponentFixture<StCardTypeVariantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StCardTypeVariantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StCardTypeVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
