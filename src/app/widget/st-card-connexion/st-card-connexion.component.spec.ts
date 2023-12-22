import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StCardConnexionComponent } from './st-card-connexion.component';

describe('StCardConnexionComponent', () => {
  let component: StCardConnexionComponent;
  let fixture: ComponentFixture<StCardConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StCardConnexionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StCardConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
