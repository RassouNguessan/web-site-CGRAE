import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollToHeaderComponent } from './scroll-to-header.component';

describe('ScrollToHeaderComponent', () => {
  let component: ScrollToHeaderComponent;
  let fixture: ComponentFixture<ScrollToHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollToHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollToHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
