import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'commmande',
    loadChildren: () => import('./commmande/commmande.module').then( m => m.CommmandePageModule)
  },
  {
    path: 'reclamation',
    loadChildren: () => import('./reclamation/reclamation.module').then( m => m.ReclamationPageModule)
  },
  {
    path: 'commandes',
    loadChildren: () => import('./commandes/commandes.module').then( m => m.CommandesPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
