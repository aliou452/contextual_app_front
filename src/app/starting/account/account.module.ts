import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPageRoutingModule } from './account-routing.module';

import { AccountPage } from './Account.page';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { CommandePageModule } from 'src/app/pages/commande/commande.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule,
    SharedComponentsModule,
    CommandePageModule,
  ],
  declarations: [AccountPage]
})
export class AccountPageModule {}
