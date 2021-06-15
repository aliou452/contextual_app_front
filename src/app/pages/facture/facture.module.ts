import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacturePageRoutingModule } from './facture-routing.module';

import { FacturePage } from './facture.page';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacturePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [FacturePage]
})
export class FacturePageModule {}
