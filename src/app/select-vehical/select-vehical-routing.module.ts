import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectVehicalPage } from './select-vehical.page';

const routes: Routes = [
  {
    path: '',
    component: SelectVehicalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectVehicalPageRoutingModule {}
