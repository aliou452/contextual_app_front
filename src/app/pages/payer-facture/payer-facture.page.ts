import { Component, OnInit } from '@angular/core';
import { IonNav, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-payer-facture',
  templateUrl: './payer-facture.page.html',
  styleUrls: ['./payer-facture.page.scss'],
})
export class PayerFacturePage implements OnInit {

  typeFacture: string;
  title: string;

  constructor(private navParams: NavParams,
              private nav: IonNav
    ) {
      this.title = "Payer Facture " + this.typeFacture;
     }

  ngOnInit() {
    this.typeFacture = this.navParams.get("type");
  }

  dismiss() {
    this.nav.pop();
  }

}
