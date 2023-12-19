import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StBackTopComponent } from './st-back-top.component';

describe('StBackTopComponent', () => {
  let component: StBackTopComponent;
  let fixture: ComponentFixture<StBackTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StBackTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StBackTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
