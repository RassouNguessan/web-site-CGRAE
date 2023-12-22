import {Component, OnInit} from '@angular/core';
import { HeaderComponent } from '../../core/header/header.component';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {StButtonGroupComponent} from "../../widget/st-button-group/st-button-group.component";
import {StCardConnexionComponent} from "../../widget/st-card-connexion/st-card-connexion.component";
import {StButtonGroupInterface} from "../../widget/st-button-group/st-button-group.interface";
import {StAlertComponent} from "../../widget/st-alert/st-alert.component";
import {StAlertInterface} from "../../widget/st-alert/st-alert.interface";
import {StProgressBarInterface} from "../../widget/st-progress-bar/st-progress-bar.interface";
import {StProgressBarComponent} from "../../widget/st-progress-bar/st-progress-bar.component";

@Component({
  selector: 'app-connexion-otp',
  standalone: true,
  imports: [
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    StButtonGroupComponent,
    StCardConnexionComponent,
    StAlertComponent,
    StProgressBarComponent
  ],
  templateUrl: './connexion-otp.component.html',
  styleUrl: './connexion-otp.component.css'
})
export class ConnexionOtpComponent implements OnInit {
  myForm!: FormGroup;

  acceptBtn: StButtonGroupInterface = {
    textBtn: "VALIDER",
    btnColor: "green",
    textBtnColor: "white"
  }

  declineBtn: StButtonGroupInterface = {
    textBtn: "RETOUR",
    btnColor: "red",
  }

  alert: StAlertInterface = {
    text: "Veuillez saisir le code OTP reçu sur votre numéro de téléphone ( +225 00 00 00 00 00 ) pour vous connecter à la SIGAD.",
    bgColor: "red"
  }

  progressBar: StProgressBarInterface = {
    totalStep: 2,
    step: 2
  }
  constructor(private route: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      otp: ['', Validators.required]
    });
  }

  handleSubmit() {
    console.log('data submit', this.myForm.value)
    this.route.navigate(['/home/space'])
  }

  handleDecline() {
    this.route.navigate(['/connexion'])
  }

}

export default ConnexionOtpComponent
