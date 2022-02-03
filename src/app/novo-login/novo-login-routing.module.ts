import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovoLoginPage } from './novo-login.page';

const routes: Routes = [
  {
    path: '',
    component: NovoLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovoLoginPageRoutingModule {}
