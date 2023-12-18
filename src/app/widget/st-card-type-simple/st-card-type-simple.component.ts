import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-st-card-type-simple',
  standalone: true,
  imports: [],
  templateUrl: './st-card-type-simple.component.html',
  styleUrl: './st-card-type-simple.component.css'
})
export class StCardTypeSimpleComponent {
  @Input() cardTitle: string = "PRÊTS SCOLAIRE";
  @Input() cardBody: string = `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,.`
  @Input() cardFooter: string = "En savoir plus";
  @Input() colorCard : "orange" | "green" | undefined;
}
