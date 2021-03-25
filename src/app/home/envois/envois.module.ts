import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnvoisPageRoutingModule } from './envois-routing.module';

import { EnvoisPage } from './envois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnvoisPageRoutingModule
  ],
  declarations: [EnvoisPage]
})
export class EnvoisPageModule {}
