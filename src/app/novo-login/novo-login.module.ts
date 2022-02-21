import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoLoginPageRoutingModule } from './novo-login-routing.module';

import { NovoLoginPage } from './novo-login.page';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoLoginPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [NovoLoginPage]
})
export class NovoLoginPageModule {}
