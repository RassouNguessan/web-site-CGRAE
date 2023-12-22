import {Component, Input} from '@angular/core';
import {StProgressBarInterface} from "./st-progress-bar.interface";

@Component({
  selector: 'app-st-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './st-progress-bar.component.html',
  styleUrl: './st-progress-bar.component.css'
})
export class StProgressBarComponent {

  @Input() step!: StProgressBarInterface

  calculWidth(): string {
    let calc = (this.step.step * 100) / this.step.totalStep
    return `${calc}%`
  }
}
