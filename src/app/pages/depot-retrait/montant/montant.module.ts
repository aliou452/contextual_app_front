import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MontantPageRoutingModule } from './montant-routing.module';

import { MontantPage } from './montant.page';
import { ConfirmationPageModule } from '../../confirmation/confirmation.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MontantPageRoutingModule,
    ConfirmationPageModule
  ],
  declarations: [MontantPage]
})
export class MontantPageModule {}
