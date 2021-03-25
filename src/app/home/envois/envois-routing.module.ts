import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnvoisPage } from './envois.page';

const routes: Routes = [
  {
    path: '',
    component: EnvoisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnvoisPageRoutingModule {}
