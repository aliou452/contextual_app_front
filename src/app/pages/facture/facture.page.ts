import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.page.html',
  styleUrls: ['./facture.page.scss'],
})
export class FacturePage implements OnInit {

  title: string = "Paiement facture"
  image = "assets/images/senelec.png"

  constructor(private nav: IonNav,) { }

  ngOnInit() {
  }

  dismiss() {
    this.nav.popToRoot();
  }

}
