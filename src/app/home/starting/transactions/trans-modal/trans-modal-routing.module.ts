import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransModalPage } from './trans-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TransModalPage
  },
  {
    path: 'envoi',
    loadChildren: () => import('./envoi/envoi.module').then( m => m.EnvoiPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransModalPageRoutingModule {}
