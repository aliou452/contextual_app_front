import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ModalController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { AccountService } from 'src/app/shared/services/account.service';
import { TransModalPage } from '../trans-modal/trans-modal.page';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {


  user: User = new User({});

  constructor(
    public authService: AuthenticationService,
    public jwtHelper: JwtHelperService,
    public accountService: AccountService,
    public modalController: ModalController
    ) { }

  async ngOnInit() {
    await this.authService.getUser().subscribe(
      user => {
        this.user = user;
        console.log("Response:", user.firstName)
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
