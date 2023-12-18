import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StHomeStartVariantComponent } from './st-home-start-variant.component';

describe('StHomeStartVariantComponent', () => {
  let component: StHomeStartVariantComponent;
  let fixture: ComponentFixture<StHomeStartVariantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StHomeStartVariantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StHomeStartVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
