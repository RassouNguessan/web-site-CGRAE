import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-st-card-type',
  standalone: true,
  imports: [],
  templateUrl: './st-card-type.component.html',
  styleUrl: './st-card-type.component.css'
})
export class StCardTypeComponent {

  @Input() cardTitle: string = "PRÊTS SCOLAIRE";
  @Input() cardBody: string = `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,.`
  @Input() cardFooter: string = "En savoir plus";
  @Input() imageCard: string = "assets/img/piecemonnaie.png"

}
