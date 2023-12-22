import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from "@angular/common";
import {StButtonGroupInterface} from "./st-button-group.interface";

@Component({
  selector: 'app-st-button-group',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './st-button-group.component.html',
  styleUrl: './st-button-group.component.css'
})
export class StButtonGroupComponent {
  @Output() submitClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() declineClicked: EventEmitter<void> = new EventEmitter<void>();

  @Input() buttonDisabled: boolean = false;
  @Input() accept!: StButtonGroupInterface;
  @Input() decline!: StButtonGroupInterface;

  onSubmitClick() {
    // Émettre l'événement lorsque le bouton est cliqué
    this.submitClicked.emit();
  }

  onDeclineClick() {
    // Émettre l'événement lorsque le bouton est cliqué
    this.declineClicked.emit();
  }

}
