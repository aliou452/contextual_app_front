import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PasswordPage } from '../password/password.page';

@Component({
  selector: 'app-envoi',
  templateUrl: './envoi.page.html',
  styleUrls: ['./envoi.page.scss'],
})
export class EnvoiPage implements OnInit {

  @Input() receiver: string;
  @Input() typeTrans: string;
  @Input() typeDep: string;
  amount: number;
  password: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PasswordPage,
      componentProps: {
        "amount": this.amount,
        "receiver": this.receiver,
        "typeTrans": this.typeTrans,
        "typeDep": this.typeDep
      }
    });

    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(data);
    return
  }

}
