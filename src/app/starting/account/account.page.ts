import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ModalController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { AccountService } from 'src/app/shared/services/account.service';
import { TransModalPage } from '../trans-modal/trans-modal.page';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  firstName: string;
  lastName: string;
  number: string;
  pocket: number;
  id: number;
  data: Account[];

  constructor(
    public authService: AuthenticationService,
    public jwtHelper: JwtHelperService,
    public accountService: AccountService,
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
