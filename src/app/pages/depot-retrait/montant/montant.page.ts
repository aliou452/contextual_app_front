import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonNav, NavParams } from '@ionic/angular';
import { User } from 'src/app/shared/models/user';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
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
  transType: string;
  user: User;

  constructor(
    private navParams: NavParams,
    private nav: IonNav,
    private authService: AuthenticationService,) { }

  ngOnInit() {
   this.receiver = this.navParams.get('receiver')
   this.name = this.navParams.get("name");
   this.transType = this.navParams.get("transType");
   this.authService.userObs.subscribe((user) => this.user = user)
  }

  dismiss(){
    this.nav.pop();
  }

  // {receiver: this.receiver, transType: this.transType}
  next(){
    if(this.amount) {
      this.nav.push(ConfirmationPage, {receiver: this.receiver, transType: this.transType, amount: this.amount});
    }
  }


}
