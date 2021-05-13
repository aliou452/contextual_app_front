import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EnvoiPage } from '../envoi/envoi.page';

@Component({
  selector: 'app-trans-modal',
  templateUrl: './trans-modal.page.html',
  styleUrls: ['./trans-modal.page.scss'],
})
export class TransModalPage implements OnInit {

  receiver: string;
  @Input() typeTrans: string;
  @Input() typeDep: string;

  transactions = {
        "depot": "Faire un depot",
        "retrait": "Faire un retrait"
      }
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: EnvoiPage,
      componentProps: {
        "receiver": this.receiver,
        "typeTrans": this.typeTrans,
        "typeDep": this.typeDep
      }
    });
    return await modal.present();
  }
}

