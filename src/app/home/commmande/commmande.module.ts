import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommmandePageRoutingModule } from './commmande-routing.module';

import { CommmandePage } from './commmande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommmandePageRoutingModule
  ],
  declarations: [CommmandePage]
})
export class CommmandePageModule {}
