import { Component, OnInit } from '@angular/core';
import { IonNav, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-facture-confirmation',
  templateUrl: './facture-confirmation.page.html',
  styleUrls: ['./facture-confirmation.page.scss'],
})
export class FactureConfirmationPage implements OnInit {

  contract: string;
  aPayer: boolean = true;
  type: string;
  disabled = true;
  numbre: number = 1;

  constructor(private navParams: NavParams,
              private nav: IonNav,

    ) { }

  ngOnInit() {
    this.contract = this.navParams.get("contract");
    this.type = this.navParams.get("type")
  }

  dismiss() {
    this.nav.pop();
  }

  onClick(event) {
    this.disabled = !event;
    console.log("click: ", this.disabled);
  }

}
