import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-st-card-service-variant',
  standalone: true,
  imports: [],
  templateUrl: './st-card-service-variant.component.html',
  styleUrl: './st-card-service-variant.component.css'
})
export class StCardServiceVariantComponent {

  constructor(private sanitizer: DomSanitizer) {}

  @Input() imgCard!: string;

  @Input() text!: string;

  @Input() iconSvg: string = `
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 50 50" >
  <g id="Groupe_14131" data-name="Groupe 14131" transform="translate(-533 -1484)">
    <rect id="Rectangle_45" data-name="Rectangle 45" width="50" height="50" rx="50" transform="translate(533 1484)" fill="#ffe0e1"/>
    <g id="file" transform="translate(506.508 1495.491)">
      <g id="Groupe_13624" data-name="Groupe 13624" transform="translate(40.097)">
        <g id="Groupe_13623" data-name="Groupe 13623">
          <path id="Tracé_19405" data-name="Tracé 19405" d="M61.585,3.581H59.306V1.3A1.306,1.306,0,0,0,58,0H41.4a1.306,1.306,0,0,0-1.3,1.3V22.139a1.306,1.306,0,0,0,1.3,1.3h2.279V25.72a1.306,1.306,0,0,0,1.3,1.3H56.05a3.8,3.8,0,0,0,2.25-.892l3.638-3.424a3.458,3.458,0,0,0,.948-2.195V4.884A1.306,1.306,0,0,0,61.585,3.581Zm-17.906,1.3V22.464H41.4a.33.33,0,0,1-.326-.326V1.3A.33.33,0,0,1,41.4.977H58a.33.33,0,0,1,.326.326V3.581H44.981A1.306,1.306,0,0,0,43.678,4.884Zm17.59,17.111-3.638,3.424a1.728,1.728,0,0,1-.279.2v-3a.816.816,0,0,1,.814-.814h3.257A1.368,1.368,0,0,1,61.269,21.995Zm.641-1.484a1.519,1.519,0,0,1-.044.326h-3.7a1.794,1.794,0,0,0-1.791,1.791v3.379a1.7,1.7,0,0,1-.326.039H44.981a.33.33,0,0,1-.326-.326V4.884a.33.33,0,0,1,.326-.326h16.6a.33.33,0,0,1,.326.326Z" transform="translate(-40.097)" fill="#ff7075"/>
        </g>
      </g>
      <g id="Groupe_13626" data-name="Groupe 13626" transform="translate(48.074 8.139)">
        <g id="Groupe_13625" data-name="Groupe 13625">
          <path id="Tracé_19406" data-name="Tracé 19406" d="M201.165,154.216h-9.442a.488.488,0,0,0,0,.977h9.442a.488.488,0,0,0,0-.977Z" transform="translate(-191.235 -154.216)" fill="#ff7075"/>
        </g>
      </g>
      <g id="Groupe_13628" data-name="Groupe 13628" transform="translate(48.074 14.651)">
        <g id="Groupe_13627" data-name="Groupe 13627">
          <path id="Tracé_19407" data-name="Tracé 19407" d="M201.165,277.59h-9.442a.488.488,0,0,0,0,.977h9.442a.488.488,0,0,0,0-.977Z" transform="translate(-191.235 -277.59)" fill="#ff7075"/>
        </g>
      </g>
      <g id="Groupe_13630" data-name="Groupe 13630" transform="translate(48.074 17.906)">
        <g id="Groupe_13629" data-name="Groupe 13629" transform="translate(0)">
          <path id="Tracé_19408" data-name="Tracé 19408" d="M196.933,339.277h-5.209a.488.488,0,1,0,0,.977h5.209a.488.488,0,0,0,0-.977Z" transform="translate(-191.236 -339.277)" fill="#ff7075"/>
        </g>
      </g>
      <g id="Groupe_13632" data-name="Groupe 13632" transform="translate(48.074 11.395)">
        <g id="Groupe_13631" data-name="Groupe 13631">
          <path id="Tracé_19409" data-name="Tracé 19409" d="M201.165,215.9h-9.442a.488.488,0,0,0,0,.977h9.442a.488.488,0,0,0,0-.977Z" transform="translate(-191.235 -215.903)" fill="#ff7075"/>
        </g>
      </g>
    </g>
  </g>
</svg>
  `

  getSafeHTML(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.iconSvg)
  }

}
