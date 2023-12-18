import { Component } from '@angular/core';
import {StCardGroupComponent} from "../../widget/st-card-group/st-card-group.component";
import {StCardServiceComponent} from "../../widget/st-card-service/st-card-service.component";
import {StCardTestimonyComponent} from "../../widget/st-card-testimony/st-card-testimony.component";
import {StCardTextImageComponent} from "../../widget/st-card-text-image/st-card-text-image.component";
import {StCardTypeComponent} from "../../widget/st-card-type/st-card-type.component";
import {StCardTypeVariantComponent} from "../../widget/st-card-type-variant/st-card-type-variant.component";
import {StFooterBeforeComponent} from "../../widget/st-footer-before/st-footer-before.component";
import {StHomeStartComponent} from "../../widget/st-home-start/st-home-start.component";
import {StMobileAppComponent} from "../../widget/st-mobile-app/st-mobile-app.component";
import {StHomeStartVariantComponent} from "../../widget/st-home-start-variant/st-home-start-variant.component";
import {StCardTypeSimpleComponent} from "../../widget/st-card-type-simple/st-card-type-simple.component";
import {HeaderComponent} from "../../core/header/header.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-space',
  standalone: true,
  imports: [
    StCardGroupComponent,
    StCardServiceComponent,
    StCardTestimonyComponent,
    StCardTextImageComponent,
    StCardTypeComponent,
    StCardTypeVariantComponent,
    StFooterBeforeComponent,
    StMobileAppComponent,
    StHomeStartVariantComponent,
    StCardTypeSimpleComponent,
    HeaderComponent
  ],
  templateUrl: './space.component.html',
  styleUrl: './space.component.css'
})
export class SpaceComponent {

}

export default SpaceComponent
