import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MontantPage } from './montant.page';

const routes: Routes = [
  {
    path: '',
    component: MontantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MontantPageRoutingModule {}
