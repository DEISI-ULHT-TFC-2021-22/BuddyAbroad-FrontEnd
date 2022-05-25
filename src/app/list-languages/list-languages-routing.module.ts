import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListLanguagesPage } from './list-languages.page';

const routes: Routes = [
  {
    path: '',
    component: ListLanguagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListLanguagesPageRoutingModule {}
