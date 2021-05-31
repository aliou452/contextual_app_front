import { Component, OnInit } from '@angular/core';
import { NavParams, IonNav, ModalController } from '@ionic/angular';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {

  amount: number;
  receiver: string;
  transType: string;
  code: string;

  constructor(
    private navParams: NavParams,
    private nav: IonNav,
    private accountService: AccountService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.amount = this.navParams.get("amount");
    this.receiver = this.navParams.get("receiver");
    this.transType = this.navParams.get("transType");
  }

  back() {
    this.nav.pop()
  }

  next() {
    this.accountService.pinDialogFunc().then(
      (result: any) => {
        if (result.buttonIndex == 1) {
          console.log('User clicked OK, value is: ', result.input1);
          this.code = result.input1;
          this.accountService[this.transType](this.receiver, this.amount, this.code).subscribe(() =>
            this.modalCtrl.dismiss()
          )
        }

        else if(result.buttonIndex == 2) console.log('User cancelled');
      }
    );

  }

}
