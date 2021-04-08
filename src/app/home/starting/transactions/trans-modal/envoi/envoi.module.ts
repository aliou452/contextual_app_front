import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnvoiPageRoutingModule } from './envoi-routing.module';

import { EnvoiPage } from './envoi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnvoiPageRoutingModule
  ],
  declarations: [EnvoiPage]
})
export class EnvoiPageModule {}
