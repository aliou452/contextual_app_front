import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PhoneComponent } from './phone/phone.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  numero: number;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  src1 = "https://www.orange.sn/sites/default/files/images/contact/ibou.svg"
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: PhoneComponent,
      cssClass: 'my-custom-class'
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.numero = data.numero
    console.log(this.numero)
    return
  }

}
