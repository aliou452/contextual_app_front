import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeddoPage } from './seddo.page';

const routes: Routes = [
  {
    path: '',
    component: SeddoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeddoPageRoutingModule {}
