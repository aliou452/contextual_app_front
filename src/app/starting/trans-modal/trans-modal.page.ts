import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EnvoiPage } from '../envoi/envoi.page';

@Component({
  selector: 'app-trans-modal',
  templateUrl: './trans-modal.page.html',
  styleUrls: ['./trans-modal.page.scss'],
})
export class TransModalPage implements OnInit {

  receiver: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: EnvoiPage,
      cssClass: 'my-custom-class',
      componentProps: {
        "receiver": this.receiver
      }
    });
    return await modal.present();
  }
}

