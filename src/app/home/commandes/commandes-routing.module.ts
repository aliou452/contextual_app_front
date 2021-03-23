import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandesPage } from './commandes.page';

const routes: Routes = [
  {
    path: '',
    component: CommandesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandesPageRoutingModule {}
