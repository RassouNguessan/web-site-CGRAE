import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion-otp',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './connexion-otp.component.html',
  styleUrl: './connexion-otp.component.css'
})
export class ConnexionOtpComponent {

  constructor(private route: Router) {

  }

  onValidate() {
    this.route.navigate(['/home/space'])
  }

  onReturn() {
    this.route.navigate(['/connexion'])
  }
}

export default ConnexionOtpComponent
