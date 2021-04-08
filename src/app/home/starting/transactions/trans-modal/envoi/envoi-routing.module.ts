import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnvoiPage } from './envoi.page';

const routes: Routes = [
  {
    path: '',
    component: EnvoiPage
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnvoiPageRoutingModule {}
