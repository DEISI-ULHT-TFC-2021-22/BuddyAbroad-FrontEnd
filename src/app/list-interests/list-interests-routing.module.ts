import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListInterestsPage } from './list-interests.page';

const routes: Routes = [
  {
    path: '',
    component: ListInterestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListInterestsPageRoutingModule {}
