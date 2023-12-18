import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StFooterBeforeComponent } from './st-footer-before.component';

describe('StFooterBeforeComponent', () => {
  let component: StFooterBeforeComponent;
  let fixture: ComponentFixture<StFooterBeforeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StFooterBeforeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StFooterBeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
