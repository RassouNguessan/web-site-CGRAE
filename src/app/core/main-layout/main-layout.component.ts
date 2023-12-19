import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {StBackTopComponent} from "../../widget/st-back-top/st-back-top.component";
import {StCallSupportComponent} from "../../widget/st-call-support/st-call-support.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, StBackTopComponent, StCallSupportComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}

export default MainLayoutComponent
