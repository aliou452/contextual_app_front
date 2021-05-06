import { NgZone } from '@angular/core';
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
    private zone: NgZone,
    ) { }

  ngOnInit() {
  }

  send() {
    console.log(this.receiver, this.amount, this.password)
    this.transactionsService.send(this.receiver, this.amount, this.password).subscribe(
      () => {
        console.log("Success");
        this.zone.runOutsideAngular(() => {
          window.location.href = 'starting/start';
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
