import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalBaseComponent } from './modal-base/modal-base.component';
import { IonicModule } from '@ionic/angular';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';
import { FactureDetailComponent } from './facture-detail/facture-detail.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ModalBaseComponent,
                ToolbarComponent,
                CardComponent,
                InputComponent,
                FactureDetailComponent,
                FooterComponent,
              ],
  imports: [CommonModule, IonicModule],
  exports: [ModalBaseComponent,
            ToolbarComponent,
            CardComponent,
            InputComponent,
            FactureDetailComponent,
            FooterComponent
          ],
})
export class SharedComponentsModule {}
