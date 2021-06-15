import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayerFacturePage } from './payer-facture.page';

const routes: Routes = [
  {
    path: '',
    component: PayerFacturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayerFacturePageRoutingModule {}
