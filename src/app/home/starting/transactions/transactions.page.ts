import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TransModalPage } from './trans-modal/trans-modal.page';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: TransModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
