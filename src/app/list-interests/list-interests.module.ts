import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListInterestsPageRoutingModule } from './list-interests-routing.module';

import { ListInterestsPage } from './list-interests.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ListInterestsPageRoutingModule
  ],
  declarations: [ListInterestsPage]
})
export class ListInterestsPageModule {}
