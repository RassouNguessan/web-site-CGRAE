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
        HeaderComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

export default HomeComponent
