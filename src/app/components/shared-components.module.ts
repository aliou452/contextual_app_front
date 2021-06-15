import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalBaseComponent } from './modal-base/modal-base.component';
import { IonicModule } from '@ionic/angular';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [ModalBaseComponent, ToolbarComponent, CardComponent],
  imports: [CommonModule, IonicModule],
  exports: [ModalBaseComponent, ToolbarComponent, CardComponent],
})
export class SharedComponentsModule {}
