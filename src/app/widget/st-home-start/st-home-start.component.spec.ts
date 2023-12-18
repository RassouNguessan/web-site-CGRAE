import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StHomeStartComponent } from './st-home-start.component';

describe('StHomeStartComponent', () => {
  let component: StHomeStartComponent;
  let fixture: ComponentFixture<StHomeStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StHomeStartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StHomeStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
