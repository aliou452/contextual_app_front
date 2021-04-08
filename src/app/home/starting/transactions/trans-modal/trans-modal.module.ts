import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransModalPageRoutingModule } from './trans-modal-routing.module';

import { TransModalPage } from './trans-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransModalPageRoutingModule
  ],
  declarations: [TransModalPage]
})
export class TransModalPageModule {}
