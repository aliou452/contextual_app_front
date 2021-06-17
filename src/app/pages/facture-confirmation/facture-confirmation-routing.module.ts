import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FactureConfirmationPage } from './facture-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: FactureConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactureConfirmationPageRoutingModule {}
