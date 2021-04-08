import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PasswordPage } from './password/password.page';

@Component({
  selector: 'app-envoi',
  templateUrl: './envoi.page.html',
  styleUrls: ['./envoi.page.scss'],
})
export class EnvoiPage implements OnInit {

  @Input() receiver: string;
  amount: number;
  password: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PasswordPage,
      cssClass: 'my-custom-class',
      componentProps: {
        "amount": this.amount,
        "receiver": this.receiver
      }
    });

    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(data);
    return
  }



}
