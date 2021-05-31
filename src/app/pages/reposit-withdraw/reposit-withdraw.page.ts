import { Component, OnInit } from '@angular/core';
import { IonNav, IonRouterOutlet, ModalController, NavParams } from '@ionic/angular';
import { ModalBaseComponent } from 'src/app/components/modal-base/modal-base.component';
import { Client } from 'src/app/shared/models/client.model';
import { AccountService } from 'src/app/shared/services/account.service';
import { EnvoiPage } from 'src/app/starting/envoi/envoi.page';
import { ConfirmationPage } from '../confirmation/confirmation.page';
import { MontantPage } from '../depot-retrait/montant/montant.page';

@Component({
  selector: 'app-reposit-withdraw',
  templateUrl: './reposit-withdraw.page.html',
  styleUrls: ['./reposit-withdraw.page.scss'],
})
export class RepositWithdrawPage implements OnInit {

  receiver: string="";
  transType: string;
  nextPage: any = MontantPage;
  chooseUserPage: any
  listCl: Client[];
  name: string = "";


  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private nav: IonNav,
    private accountService: AccountService) { }

  ngOnInit() {
    this.transType = this.navParams.get('data');
    this.accountService.getClDist().subscribe( data => this.listCl = data);
  }

  dismiss(){
    this.modalController.dismiss()
  }

  async goForward() {
    this.nav.push(this.nextPage, {receiver: this.receiver, transType: this.transType, name: this.name});
  }

  chooseUser() {
    this.nav.push(this.chooseUserPage);
  }

  takeClient(el: Client) {
    this.receiver = el.number;
    this.name = el.firstName + " " + el.lastName;
    this.goForward()
  }

  next(){
    if(this.receiver.length == 9) {
      this.accountService.getClient(this.receiver).subscribe(client =>
        {
          this.receiver = client.number;
        });
    }
    this.goForward()
  }
}
