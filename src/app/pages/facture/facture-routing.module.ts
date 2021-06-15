import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacturePage } from './facture.page';

const routes: Routes = [
  {
    path: '',
    component: FacturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacturePageRoutingModule {}
