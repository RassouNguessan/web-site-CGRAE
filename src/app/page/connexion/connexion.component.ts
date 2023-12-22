import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../../core/header/header.component";
import {StCardConnexionComponent} from "../../widget/st-card-connexion/st-card-connexion.component";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {StButtonGroupComponent} from "../../widget/st-button-group/st-button-group.component";
import {StButtonGroupInterface} from "../../widget/st-button-group/st-button-group.interface";
import {StAlertComponent} from "../../widget/st-alert/st-alert.component";
import {StAlertInterface} from "../../widget/st-alert/st-alert.interface";
import {StProgressBarInterface} from "../../widget/st-progress-bar/st-progress-bar.interface";
import {StProgressBarComponent} from "../../widget/st-progress-bar/st-progress-bar.component";

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [
    HeaderComponent,
    StCardConnexionComponent,
    ReactiveFormsModule,
    StButtonGroupComponent,
    StAlertComponent,
    StProgressBarComponent
  ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent implements OnInit {
  myForm!: FormGroup;

  acceptBtn: StButtonGroupInterface = {
    textBtn: "VALIDER",
    btnColor: "green",
    textBtnColor: "white"
  }

  declineBtn: StButtonGroupInterface = {
    textBtn: "ANNULER",
    btnColor: "red",
  }

  alert: StAlertInterface = {
    text: "Veuillez remplir le formulaire ci-dessous afin d’accéder à la SIGAD. Une fois cela fait, vous recevrez un code OTP pour vous connecter.",
    bgColor: "red"
  }

  progressBar: StProgressBarInterface = {
    totalStep: 2,
    step: 1
  }

  constructor(private route: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      num_secu: ['', Validators.required],
      tel: ['', Validators.required],
    });
  }

  handleSubmit() {
    console.log('data submit', this.myForm.value)
    this.route.navigate(['/connexion/otp'])
  }

  handleDecline() {
    this.route.navigate(['/home'])
  }

}

export default ConnexionComponent
