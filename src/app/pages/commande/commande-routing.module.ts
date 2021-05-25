import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandePage } from './commande.page';

const routes: Routes = [
  {
    path: '',
    component: CommandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandePageRoutingModule {}
