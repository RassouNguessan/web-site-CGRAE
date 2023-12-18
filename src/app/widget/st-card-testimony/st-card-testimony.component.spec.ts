import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StCardTestimonyComponent } from './st-card-testimony.component';

describe('StCardTestimonyComponent', () => {
  let component: StCardTestimonyComponent;
  let fixture: ComponentFixture<StCardTestimonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StCardTestimonyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StCardTestimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
