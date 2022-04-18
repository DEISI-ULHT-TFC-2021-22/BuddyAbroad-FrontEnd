import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListLanguagesPageRoutingModule } from './list-languages-routing.module';

import { ListLanguagesPage } from './list-languages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListLanguagesPageRoutingModule
  ],
  declarations: [ListLanguagesPage]
})
export class ListLanguagesPageModule {}
