import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhoneAuthPage } from './phone-auth.page';

const routes: Routes = [
  {
    path: '',
    component: PhoneAuthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhoneAuthPageRoutingModule {}
