import { Component, OnInit } from '@angular/core';
import { IonNav, IonRouterOutlet, ModalController, NavParams } from '@ionic/angular';
import { ModalBaseComponent } from 'src/app/components/modal-base/modal-base.component';
import { EnvoiPage } from 'src/app/starting/envoi/envoi.page';
import { ConfirmationPage } from '../confirmation/confirmation.page';

@Component({
  selector: 'app-reposit-withdraw',
  templateUrl: './reposit-withdraw.page.html',
  styleUrls: ['./reposit-withdraw.page.scss'],
})
export class RepositWithdrawPage implements OnInit {

  receiver: string="";
  transType: string;
  nextPage: any = ConfirmationPage;
  chooseUserPage: any


  constructor(
    private modalController: ModalController,
    public navParams: NavParams,
    private nav: IonNav,) { }

  ngOnInit() {
    this.transType = this.navParams.get('data');
    console.log("OrderType" ,this.transType);
  }

  dismiss(){
    this.modalController.dismiss()
  }

  async goForward() {
    this.nav.push(this.nextPage, {receiver: this.receiver, transType: this.transType});
  }

  chooseUser() {
    this.nav.push(this.chooseUserPage);
  }

  takeClient(num: string) {
    this.receiver = num;

  }
}
