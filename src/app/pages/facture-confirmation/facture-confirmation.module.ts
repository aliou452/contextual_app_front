import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FactureConfirmationPageRoutingModule } from './facture-confirmation-routing.module';

import { FactureConfirmationPage } from './facture-confirmation.page';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FactureConfirmationPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [FactureConfirmationPage]
})
export class FactureConfirmationPageModule {}
