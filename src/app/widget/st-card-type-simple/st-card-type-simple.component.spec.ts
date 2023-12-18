import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StCardTypeSimpleComponent } from './st-card-type-simple.component';

describe('StCardTypeSimpleComponent', () => {
  let component: StCardTypeSimpleComponent;
  let fixture: ComponentFixture<StCardTypeSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StCardTypeSimpleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StCardTypeSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
