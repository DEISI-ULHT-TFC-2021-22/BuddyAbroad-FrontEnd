import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileCreationPageRoutingModule } from './profile-creation-routing.module';

import { ProfileCreationPage } from './profile-creation.page';
import {FileSizeFormatPipe} from './file-size-format.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProfileCreationPageRoutingModule,
        ReactiveFormsModule,
        SharedModule,
    ],
  declarations: [ProfileCreationPage,FileSizeFormatPipe]
})
export class ProfileCreationPageModule {}
