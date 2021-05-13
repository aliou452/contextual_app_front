import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartingPage } from './starting.page';

const routes: Routes = [
  {
    path: '',
    component: StartingPage,
    children: [
      {
        path: 'start',
        children: [
          {
            path: '',
            loadChildren: () => import("./start/start.module").then(m => m.StartPageModule),
          },
        ],
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: () => import("./account/account.module").then(m => m.AccountPageModule)
          },
        ],
      }
    ]
  },
  {
    path: 'commande',
    loadChildren: () => import('./commande/commande.module').then( m => m.CommandePageModule)
  },
  {
    path: 'seddo',
    loadChildren: () => import('./seddo/seddo.module').then( m => m.SeddoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartingPageRoutingModule {}
