import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {StProgressBarComponent} from "../st-progress-bar/st-progress-bar.component";
import {StAlertComponent} from "../st-alert/st-alert.component";

@Component({
  selector: 'app-st-card-connexion',
  standalone: true,
  imports: [
    StProgressBarComponent,
    StAlertComponent, FormsModule
  ],
  templateUrl: './st-card-connexion.component.html',
  styleUrl: './st-card-connexion.component.css'
})
export class StCardConnexionComponent {

}
