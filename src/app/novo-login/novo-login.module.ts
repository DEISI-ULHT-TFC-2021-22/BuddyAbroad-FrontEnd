import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoLoginPageRoutingModule } from './novo-login-routing.module';

import { NovoLoginPage } from './novo-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoLoginPageRoutingModule
  ],
  declarations: [NovoLoginPage]
})
export class NovoLoginPageModule {}
