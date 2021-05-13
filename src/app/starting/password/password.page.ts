import { NgZone } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  @Input() receiver: string;
  @Input() amount: number;
  @Input() typeTrans: string;
  @Input() typeDep: string;
  password: string;

  constructor(
    private modalCtrl: ModalController,
    private accountService: AccountService,
    private zone: NgZone,
    ) { }

  ngOnInit() {
  }

  send() {
    console.log(this.receiver, this.amount, this.password)
    if(this.typeTrans=="depot")
    this.accountService.depot(this.receiver, this.amount, this.password, this.typeDep).subscribe(
      () => {
        console.log("Success");
        this.zone.runOutsideAngular(() => {
          window.location.href = 'starting/account';
          this.dismiss()
        });
      }
    )
    else if(this.typeTrans=="retrait")
    this.accountService.retrait(this.receiver, this.amount, this.password).subscribe(
      () => {
        console.log("Success");
        this.zone.runOutsideAngular(() => {
          window.location.href = 'starting/account';
          this.dismiss()
        });
      }
    )

  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
