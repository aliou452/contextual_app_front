import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepositWithdrawPage } from './reposit-withdraw.page';

const routes: Routes = [
  {
    path: '',
    component: RepositWithdrawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepositWithdrawPageRoutingModule {}
