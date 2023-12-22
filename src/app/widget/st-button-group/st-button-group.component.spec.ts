import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StButtonGroupComponent } from './st-button-group.component';

describe('StButtonGroupComponent', () => {
  let component: StButtonGroupComponent;
  let fixture: ComponentFixture<StButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StButtonGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
