import { Component, Input, NgZone, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as firebase from 'firebase';
import { WindowService } from 'src/app/shared/services/window.service';
import { PhoneComponent } from '../phone/phone.component';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-auth',
  templateUrl: './phone-auth.page.html',
  styleUrls: ['./phone-auth.page.scss'],
})
export class PhoneAuthPage implements OnInit {

  numero: number;
  window: any;
  verifCode: string;

  constructor(
    public modalCtrl: ModalController,
    public ngFireAuth: AngularFireAuth,
    public windowService: WindowService,
    private router: Router,
    private zone: NgZone
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.window = this.windowService.NativeWindow;
    this.window.recaptchaVerifier = new firebase.default.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved - will proceed with submit function
        // console.log(response)
      }
    });
  }

  async sendLoginCode() {
    //Make sure phone number in e164 format
    const num = "+221" + this.numero.toString();
    localStorage.setItem("phoneNumber", this.numero.toString())
    const appVerifier = this.window.recaptchaVerifier;

    firebase.default.auth().signInWithPhoneNumber(num, appVerifier)
      .then(async result => {
        this.verifCode = await this.presentModal();
        // console.log("Verification code: ", this.verifCode.toString())
        result.confirm(this.verifCode.toString()).then((result) => {
          console.log("User result", result.user)

          this.zone.run(() => {
            this.router.navigate(['/home']);
          });

        }).catch((error) => {
          console.log("Bad verification code", error)
        });

        this.window.result = result;
      })
      .catch(err => console.log('err1', err))
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: PhoneComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        "tel": this.numero
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    return data.code;
  }
}
