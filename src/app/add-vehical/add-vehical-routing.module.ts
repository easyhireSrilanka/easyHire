import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVehicalPage } from './add-vehical.page';

const routes: Routes = [
  {
    path: '',
    component: AddVehicalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddVehicalPageRoutingModule {}
