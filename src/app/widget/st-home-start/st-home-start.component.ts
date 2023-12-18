import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-st-home-start',
  standalone: true,
  imports: [],
  templateUrl: './st-home-start.component.html',
  styleUrl: './st-home-start.component.css'
})
export class StHomeStartComponent {

  constructor(private router: Router) {
  }

  onAccessConnexion() {
    this.router.navigate(['/connexion'])
  }

}
