import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-st-card-type-variant',
  standalone: true,
  imports: [],
  templateUrl: './st-card-type-variant.component.html',
  styleUrl: './st-card-type-variant.component.css'
})
export class StCardTypeVariantComponent {

  @Input() cardTitle: string = "ACOMPTE PENSION";
  @Input() cardBody: string = `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,.`
  @Input() cardFooter: string = "En savoir plus";
  @Input() imageCard: string = "assets/img/Groupe 13678/Groupe 13678.png"

}
