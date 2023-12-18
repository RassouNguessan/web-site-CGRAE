import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StCardGroupComponent } from './st-card-group.component';

describe('StCardGroupComponent', () => {
  let component: StCardGroupComponent;
  let fixture: ComponentFixture<StCardGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StCardGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StCardGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
