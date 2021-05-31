import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepositWithdrawPageRoutingModule } from './reposit-withdraw-routing.module';

import { RepositWithdrawPage } from './reposit-withdraw.page';
import { MontantPageModule } from '../depot-retrait/montant/montant.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepositWithdrawPageRoutingModule,
    MontantPageModule
  ],
  declarations: [RepositWithdrawPage]
})
export class RepositWithdrawPageModule {}
