import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'starting',
    loadChildren: () => import('./starting/starting.module').then( m => m.StartingPageModule)
  },
  {
    path: 'commande',
    loadChildren: () => import('./pages/commande/commande.module').then( m => m.CommandePageModule)
  },  {
    path: 'reposit-withdraw',
    loadChildren: () => import('./pages/reposit-withdraw/reposit-withdraw.module').then( m => m.RepositWithdrawPageModule)
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./pages/confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  },


  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
