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
        path: 'transactions',
        children: [
          {
            path: '',
            loadChildren: () => import("./transactions/transactions.module").then(m => m.TransactionsPageModule)
            //  './transactions/transactions.module#TransactionsPageModule',
          },
        ],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartingPageRoutingModule {}
