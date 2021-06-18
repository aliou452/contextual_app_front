import { Component, OnInit } from '@angular/core';
import { IonNav, NavParams } from '@ionic/angular';
import { FactureService } from 'src/app/shared/services/facture.service';
import { FactureConfirmationPage } from '../facture-confirmation/facture-confirmation.page';
import { FacturePage } from '../facture/facture.page';

@Component({
  selector: 'app-payer-facture',
  templateUrl: './payer-facture.page.html',
  styleUrls: ['./payer-facture.page.scss'],
})
export class PayerFacturePage implements OnInit {

  typeFacture: string;
  contract: string;

  constructor(
              private navParams: NavParams,
              private nav: IonNav,
              private factureService: FactureService,
    ) {}

  ngOnInit() {
    this.typeFacture = this.navParams.get("type");
    this.contract = this.navParams.get("contract");

  }

  dismiss() {
    this.nav.pop();
  }

  next() {
    this.factureService.getContract(this.contract).subscribe(
      isPresent => {
        if(isPresent){
          this.nav.push(FactureConfirmationPage, {type: this.typeFacture, contract: this.contract})
        }

      }
      );
  }

  getContract(event) {
    this.contract = event;
  }

}
