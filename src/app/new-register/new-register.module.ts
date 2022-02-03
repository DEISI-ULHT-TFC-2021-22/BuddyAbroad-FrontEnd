import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewRegisterPageRoutingModule } from './new-register-routing.module';

import { NewRegisterPage } from './new-register.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewRegisterPageRoutingModule,
    HttpClientModule
  ],
  declarations: [NewRegisterPage]
})
export class NewRegisterPageModule {}
