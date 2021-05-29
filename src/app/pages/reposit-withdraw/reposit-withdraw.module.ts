import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepositWithdrawPageRoutingModule } from './reposit-withdraw-routing.module';

import { RepositWithdrawPage } from './reposit-withdraw.page';
import { ConfirmationPageModule } from '../confirmation/confirmation.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepositWithdrawPageRoutingModule,
    ConfirmationPageModule
  ],
  declarations: [RepositWithdrawPage]
})
export class RepositWithdrawPageModule {}
