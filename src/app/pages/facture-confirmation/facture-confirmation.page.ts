import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonNav, ModalController, NavParams } from '@ionic/angular';
import { Facture } from 'src/app/shared/models/facture.model';
import { AccountService } from 'src/app/shared/services/account.service';
import { FactureService } from 'src/app/shared/services/facture.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

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
  numbre: number;
  factures: Facture[];
  code: string;

  constructor(
              private navParams: NavParams,
              private nav: IonNav,
              private factService: FactureService,
              private accountService: AccountService,
              private loadingService: LoaderService,
              private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.contract = this.navParams.get("contract");
    this.type = this.navParams.get("type");
    this.factService.getFactures(this.contract).subscribe(
      (factures) => {
        this.factures = factures;
        this.numbre = factures.length;
      });
  }

  format(value): string{
    const date = new Date();
    date.setFullYear(value[0], value[1], value[1]);
    return formatDate(date, 'longDate', "fr");
  }

  dismiss() {
    this.nav.pop();
  }

  onClick(event) {
    this.disabled = !event;
    console.log("click: ", this.disabled);
  }

  payer() {

    this.accountService.pinDialogFunc().then(
      (result: any) => {
        if(result.buttonIndex==1) {
          this.code = result.input1;
          this.loadingService.showLoader(4000);
          this.factService.payFacture(this.factures[0].id, this.code).subscribe(
            _ => {
              this.modalCtrl.dismiss();
              this.loadingService.stopLoader();
            }
          )
        }
      }
    )
  }

}
