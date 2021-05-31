import { Component, OnInit } from '@angular/core';
import { IonNav, NavParams } from '@ionic/angular';
import { ConfirmationPage } from '../../confirmation/confirmation.page';

@Component({
  selector: 'app-montant',
  templateUrl: './montant.page.html',
  styleUrls: ['./montant.page.scss'],
})
export class MontantPage implements OnInit {

  receiver: string;
  name: string="";
  amount: number;
  transType: string

  constructor(
    private navParams: NavParams,
    private nav: IonNav) { }

  ngOnInit() {
   this.receiver = this.navParams.get('receiver')
   this.name = this.navParams.get("name");
   this.transType = this.navParams.get("transType");
  }

  dismiss(){
    this.nav.pop()
  }

  // {receiver: this.receiver, transType: this.transType}
  next(){
    this.nav.push(ConfirmationPage, {receiver: this.receiver, transType: this.transType, amount: this.amount});
  }


}
