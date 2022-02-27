import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewProfileCreationPage } from './new-profile-creation.page';

const routes: Routes = [
  {
    path: '',
    component: NewProfileCreationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewProfileCreationPageRoutingModule {}
