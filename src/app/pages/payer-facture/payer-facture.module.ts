import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayerFacturePageRoutingModule } from './payer-facture-routing.module';

import { PayerFacturePage } from './payer-facture.page';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayerFacturePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [PayerFacturePage]
})
export class PayerFacturePageModule {}
