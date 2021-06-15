import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MontantPageRoutingModule } from './montant-routing.module';

import { MontantPage } from './montant.page';
import { ConfirmationPageModule } from '../../confirmation/confirmation.module';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MontantPageRoutingModule,
    ConfirmationPageModule,
    SharedComponentsModule
  ],
  declarations: [MontantPage]
})
export class MontantPageModule {}
