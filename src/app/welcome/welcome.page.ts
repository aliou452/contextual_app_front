import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PhoneComponent } from './phone/phone.component';
// import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

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
  src2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSORaTJ-Tpq-QUIIiFP8JAdIHgai2S1TqtTbA&usqp=CAU"
  src3 = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fclientespace.com%2Fwp-content%2Fuploads%2F2020%2F10%2Ftaris-orange-money-frais-retrait-argent.jpg&imgrefurl=https%3A%2F%2Fclientespace.com%2Forange-money-senegal-frais-et-tarif-de-transfert-et-retrait%2F&tbnid=G-Ed1jL0CN49HM&vet=12ahUKEwiF-ICAlZTvAhVM3RoKHdlnB7gQMygNegUIARDBAQ..i&docid=qdLP-n_7_yHn8M&w=193&h=261&q=orange%20money%20&safe=active&ved=2ahUKEwiF-ICAlZTvAhVM3RoKHdlnB7gQMygNegUIARDBAQ"
  constructor(
    private modalCtrl: ModalController,
    // private androidPermissions: AndroidPermissions
    ) { }

  ngOnInit() {
    // this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(
    //   result => console.log('Has permission?',result.hasPermission),
    //   err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE)
    // );

    // this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_PHONE_STATE, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
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
