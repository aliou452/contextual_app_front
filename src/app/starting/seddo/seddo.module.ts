import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeddoPageRoutingModule } from './seddo-routing.module';

import { SeddoPage } from './seddo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeddoPageRoutingModule
  ],
  declarations: [SeddoPage]
})
export class SeddoPageModule {}
