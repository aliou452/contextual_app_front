import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { TransactionsService } from 'src/app/shared/services/transactions.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  @Input() receiver: string;
  @Input() amount: number;
  password: string;

  constructor(
    private modalCtrl: ModalController,
    private transactionsService: TransactionsService,
    ) { }

  ngOnInit() {
  }

  send() {
    console.log(this.receiver, this.amount, this.password)
    this.transactionsService.send(this.receiver, this.amount, this.password, 2).subscribe(
      () => console.log("Success")
    )
    this.dismiss()
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
