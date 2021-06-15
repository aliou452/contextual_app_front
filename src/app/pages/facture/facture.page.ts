import { Component, OnInit } from '@angular/core';
import { IonNav, ModalController } from '@ionic/angular';
import { PayerFacturePage } from '../payer-facture/payer-facture.page';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.page.html',
  styleUrls: ['./facture.page.scss'],
})
export class FacturePage implements OnInit {

  title: string = "Paiement facture"
  image = "assets/images/senelec.png"
  image2 = "assets/images/SenEau.jpg"
  image3 = "assets/images/rapido.png"

  constructor(
    private nav: IonNav,
    private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  present(typ: string) {
    this.nav.push(PayerFacturePage, { type: typ});
  }

}
