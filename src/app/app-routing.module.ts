import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  //   loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
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
  },
  {
    path: 'reposit-withdraw',
    loadChildren: () => import('./pages/reposit-withdraw/reposit-withdraw.module').then( m => m.RepositWithdrawPageModule)
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./pages/confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  },
  {
    path: 'montant',
    loadChildren: () => import('./pages/depot-retrait/montant/montant.module').then( m => m.MontantPageModule)
  },
  {
    path: 'facture',
    loadChildren: () => import('./pages/facture/facture.module').then( m => m.FacturePageModule)
  },
  {
    path: 'payer-facture',
    loadChildren: () => import('./pages/payer-facture/payer-facture.module').then( m => m.PayerFacturePageModule)
  },
  {
    path: 'facture-confirmation',
    loadChildren: () => import('./pages/facture-confirmation/facture-confirmation.module').then( m => m.FactureConfirmationPageModule)
  },

  { path: 'features', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) },

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
