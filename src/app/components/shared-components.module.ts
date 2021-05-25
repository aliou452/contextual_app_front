import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalBaseComponent } from './modal-base/modal-base.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ModalBaseComponent],
  imports: [CommonModule, IonicModule],
  exports: [ModalBaseComponent],
})
export class SharedComponentsModule {}
