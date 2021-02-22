import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddVehicalPageRoutingModule } from './add-vehical-routing.module';

import { AddVehicalPage } from './add-vehical.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddVehicalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddVehicalPage]
})
export class AddVehicalPageModule {}
