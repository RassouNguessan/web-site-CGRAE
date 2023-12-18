import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StCardTextImageComponent } from './st-card-text-image.component';

describe('StCardTextImageComponent', () => {
  let component: StCardTextImageComponent;
  let fixture: ComponentFixture<StCardTextImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StCardTextImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StCardTextImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
