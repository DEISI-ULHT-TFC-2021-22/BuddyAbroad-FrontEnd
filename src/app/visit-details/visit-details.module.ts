import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitDetailsPageRoutingModule } from './visit-details-routing.module';

import { VisitDetailsPage } from './visit-details.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitDetailsPageRoutingModule,
    SharedModule,
  ],
  declarations: [VisitDetailsPage]
})
export class VisitDetailsPageModule {}
