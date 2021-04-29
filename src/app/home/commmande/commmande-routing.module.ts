import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommmandePage } from './commmande.page';

const routes: Routes = [
  {
    path: '',
    component: CommmandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommmandePageRoutingModule {}
