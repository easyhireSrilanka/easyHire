import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectVehicalPageRoutingModule } from './select-vehical-routing.module';

import { SelectVehicalPage } from './select-vehical.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectVehicalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SelectVehicalPage]
})
export class SelectVehicalPageModule {}
