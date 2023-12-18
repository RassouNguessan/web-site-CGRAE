import { Component } from '@angular/core';
import {HeaderComponent} from "../../core/header/header.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {

  constructor(private route: Router) {

  }
  onValidate() {
    this.route.navigate(['/connexion/otp'])
  }

  onReturnHome() {
    this.route.navigate(['/home'])
  }
}

export default ConnexionComponent
