import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionOtpComponent } from './connexion-otp.component';

describe('ConnexionOtpComponent', () => {
  let component: ConnexionOtpComponent;
  let fixture: ComponentFixture<ConnexionOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnexionOtpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConnexionOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
