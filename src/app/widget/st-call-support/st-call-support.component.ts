import { Component } from '@angular/core';
import {NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-st-call-support',
  standalone: true,
  imports: [
    NgIf,
    NgStyle
  ],
  templateUrl: './st-call-support.component.html',
  styleUrl: './st-call-support.component.css'
})
export class StCallSupportComponent {

  isVisible: boolean = false

  onShowCall() {
    this.isVisible = !this.isVisible
  }

}
