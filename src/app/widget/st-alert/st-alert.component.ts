import {Component, Input} from '@angular/core';
import {StAlertInterface} from "./st-alert.interface";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-st-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './st-alert.component.html',
  styleUrl: './st-alert.component.css'
})
export class StAlertComponent {
  @Input() alert!: StAlertInterface

}
