import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {StHomeStartComponent} from "../../widget/st-home-start/st-home-start.component";
import {StFooterBeforeComponent} from "../../widget/st-footer-before/st-footer-before.component";
import {StCardTestimonyComponent} from "../../widget/st-card-testimony/st-card-testimony.component";
import {StMobileAppComponent} from "../../widget/st-mobile-app/st-mobile-app.component";
import {StCardGroupComponent} from "../../widget/st-card-group/st-card-group.component";
import {StCardTypeComponent} from "../../widget/st-card-type/st-card-type.component";
import {StCardTypeVariantComponent} from "../../widget/st-card-type-variant/st-card-type-variant.component";
import {StCardTextImageComponent} from "../../widget/st-card-text-image/st-card-text-image.component";
import {StCardServiceComponent} from "../../widget/st-card-service/st-card-service.component";
import {HeaderComponent} from "../../core/header/header.component";
import { StCardServiceVariantComponent } from '../../widget/st-card-service-variant/st-card-service-variant.component';
import { StProgressStepperComponent } from '../../widget/st-progress-stepper/st-progress-stepper.component';
@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        StHomeStartComponent,
        StFooterBeforeComponent,
        StCardTestimonyComponent,
        StMobileAppComponent,
        StCardGroupComponent,
        StCardTypeComponent,
        StCardTypeVariantComponent,
        StCardTextImageComponent,
        StCardServiceComponent,
        StCardServiceVariantComponent,
        StProgressStepperComponent,
        HeaderComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

   romi: string = `
   <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
               <g id="Groupe_14135" data-name="Groupe 14135" transform="translate(-130 -1686)">
                <rect id="Rectangle_47" data-name="Rectangle 47" width="50" height="50" rx="25" transform="translate(130 1686)" fill="#ffefe2"/>
                <g id="Page-1" transform="translate(138.828 1700.775)">
                  <g id="_034---Life-Insurance" data-name="034---Life-Insurance" transform="translate(1 0)">
                   <path id="Shape" d="M21.965,0a7.073,7.073,0,0,0-5.794,2.955A7.073,7.073,0,0,0,10.378,0C6.207,0,3.616,2.643,3.616,6.9A8.574,8.574,0,0,0,4.139,9.94H1.523a.523.523,0,1,0,0,1.046h3.1a12.608,12.608,0,0,0,2.845,3.24c.268.239.528.471.771.7,1.779,1.7,7.371,6.213,7.609,6.4a.523.523,0,0,0,.657,0c.238-.191,5.831-4.709,7.609-6.4.243-.232.5-.464.771-.7a12.608,12.608,0,0,0,2.845-3.24h3.1a.523.523,0,0,0,0-1.046H28.207A8.574,8.574,0,0,0,28.728,6.9C28.728,2.643,26.137,0,21.965,0ZM4.662,6.9c0-3.665,2.137-5.853,5.716-5.853a6.08,6.08,0,0,1,5.33,3.12.545.545,0,0,0,.927,0,6.08,6.08,0,0,1,5.33-3.12c3.58,0,5.716,2.188,5.716,5.853a7.339,7.339,0,0,1-.609,3.041H24.019a.523.523,0,0,0-.484.325l-.583-2.04a.523.523,0,0,0-.5-.377h0a.523.523,0,0,0-.5.373L20.965,11.5,19.823,6.169A.523.523,0,0,0,18.8,6.151L17.856,9.94h-2.73a.523.523,0,0,0-.484.325l-.583-2.04a.523.523,0,0,0-.5-.377.494.494,0,0,0-.5.373L12.071,11.5,10.929,6.169a.523.523,0,0,0-.5-.414.511.511,0,0,0-.516.4L8.962,9.94H5.272A7.34,7.34,0,0,1,4.662,6.9Zm19.521,6.546c-.276.247-.545.487-.8.727-1.5,1.434-5.965,5.067-7.215,6.081-1.25-1.014-5.711-4.647-7.215-6.081-.252-.24-.521-.48-.8-.727a13.236,13.236,0,0,1-2.31-2.459h3.52a.523.523,0,0,0,.507-.4l.5-2,1.1,5.12a.523.523,0,0,0,.491.413.531.531,0,0,0,.523-.372l1.056-3.52.556,1.945a.523.523,0,0,0,.492.379A.546.546,0,0,0,15.1,12.2l.4-1.212h2.762a.523.523,0,0,0,.507-.4l.5-2,1.1,5.12a.523.523,0,0,0,.491.413h.019a.523.523,0,0,0,.5-.373l1.056-3.52.556,1.945a.523.523,0,0,0,.492.379.554.554,0,0,0,.507-.358l.4-1.211h2.1A13.236,13.236,0,0,1,24.184,13.445Z" transform="translate(-1 0)" fill="#ff8f33"/>
                  </g>
               </g>
               </g>
             </svg>
   `

}

export default HomeComponent
