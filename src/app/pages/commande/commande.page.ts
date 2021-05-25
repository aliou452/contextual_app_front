import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { AccountService } from 'src/app/shared/services/account.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {

  amount: number;
  code: string;
  orderType: string;

  constructor(private accountService: AccountService,
    private modalController: ModalController,
    private loadingService: LoaderService,
    public navParams: NavParams,
    ) { }

  ngOnInit() {
    this.orderType = this.navParams.get('data')
    console.log("OrderType" ,this.orderType)
  }

  order(){
    this.loadingService.showLoader(2000)
    this.accountService.order(this.amount, this.code, this.orderType=="UV"?"MONEY":"SEDDO").subscribe(
      () => {
        console.log("Success");
        this.modalController.dismiss();
        this.loadingService.stopLoader();
      }
    );
  }

}
