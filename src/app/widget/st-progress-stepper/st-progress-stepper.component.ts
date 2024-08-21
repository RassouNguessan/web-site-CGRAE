import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component,ElementRef,Renderer2, } from '@angular/core';

@Component({
  selector: 'app-st-progress-stepper',
  standalone: true,
  imports: [NgIf, NgFor, NgStyle, NgClass],
  templateUrl: './st-progress-stepper.component.html',
  styleUrl: './st-progress-stepper.component.css'
})
export class StProgressStepperComponent {
  steps: number[] = [1, 2, 3, 4]
  currentStep: number = 1

  onNextStep() {
    this.currentStep++
  }

  onPreviousStep() {
    this.currentStep--
  }

}
