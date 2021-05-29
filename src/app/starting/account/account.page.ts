import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { AccountService } from 'src/app/shared/services/account.service';
import { User } from 'src/app/shared/models/user';
import { ModalBaseComponent } from 'src/app/components/modal-base/modal-base.component';
import { CommandePage } from 'src/app/pages/commande/commande.page';
import { RepositWithdrawPage } from 'src/app/pages/reposit-withdraw/reposit-withdraw.page';

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
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    ) { }

  async ngOnInit() {
    await this.authService.getUser().subscribe(
      user => {
        this.user = user;
        console.log("Response:", user.firstName);
      }
    );
  }

  async logout() {
    console.log("Loging out");
    await this.authService.logout();
  }

  async presentModal(typ: string) {
    const modal = await this.modalController.create({
      presentingElement: this.routerOutlet.nativeEl,
      component: ModalBaseComponent,
      componentProps: {
        rootPage: (typ=="UV" || typ=="Seddo")?CommandePage:RepositWithdrawPage,
        orderType: typ,
      },
    });

    await modal.present();

    await modal.onWillDismiss().then( _ => {
      this.authService.getUser().subscribe(
        user => {
          this.user = user;
          console.log("Response:", user.firstName);
        }
      );
    })
  }
}
