import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionsPage } from './transactions.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionsPage
  },
  {
    path: 'trans-modal',
    loadChildren: () => import('../trans-modal/trans-modal.module').then( m => m.TransModalPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionsPageRoutingModule {}
