import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ModalController } from '@ionic/angular';
import { Transactions } from 'src/app/shared/models/transactions.model';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { TransactionsService } from 'src/app/shared/services/transactions.service';
import { TransModalPage } from '../trans-modal/trans-modal.page';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  firstName: string;
  lastName: string;
  number: string;
  pocket: number;
  list: any[] = [];
  id: number;
  data: Transactions[];

  constructor(
    public authService: AuthenticationService,
    public jwtHelper: JwtHelperService,
    public transactionsService: TransactionsService,
    public modalController: ModalController
    ) { }

  async ngOnInit() {
    await this.authService.getUser().subscribe(
      res => {
        console.log("Response:")
        console.log(JSON.parse(JSON.stringify(res))["firstName"])
        this.firstName = JSON.parse(JSON.stringify(res))["firstName"]
        this.lastName = JSON.parse(JSON.stringify(res))["lastName"]
        this.number = JSON.parse(JSON.stringify(res))["number"]
        this.pocket = JSON.parse(JSON.stringify(res))["pocket"],
        this.id = JSON.parse(JSON.stringify(res))["id"]
        console.log(this.id)
      }
    )
    await this.getTransactions();

  }

  async getTransactions(){
    await this.transactionsService.getTransaction().subscribe(
      res =>
      this.list = res
    );
  }

  async logout() {
    console.log("Loging out")
    await this.authService.logout()
  }

  async presentModal(typeTrans) {
    const modal = await this.modalController.create({
      component: TransModalPage,
      componentProps: {
        "typeTrans": typeTrans,
        "typeDep": "MONEY"
      }
    });
    return await modal.present();
  }

}
