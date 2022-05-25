import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewProfileCreationPageRoutingModule } from './new-profile-creation-routing.module';

import { NewProfileCreationPage } from './new-profile-creation.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NewProfileCreationPageRoutingModule
  ],
  declarations: [NewProfileCreationPage]
})
export class NewProfileCreationPageModule {}
