import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPageRoutingModule } from './account-routing.module';

import { AccountPage } from './Account.page';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { CommandePageModule } from 'src/app/pages/commande/commande.module';
import { RepositWithdrawPageModule } from 'src/app/pages/reposit-withdraw/reposit-withdraw.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule,
    SharedComponentsModule,
    CommandePageModule,
    RepositWithdrawPageModule
  ],
  declarations: [AccountPage]
})
export class AccountPageModule {}
