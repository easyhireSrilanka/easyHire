import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-vehical',
  templateUrl: './add-vehical.page.html',
  styleUrls: ['./add-vehical.page.scss'],
})
export class AddVehicalPage implements OnInit {

  constructor(public fb: FormBuilder) { }

  districtForm = this.fb.group({
    driverType:[''],
    district: [''],
    vehicalType: ['']
  });
  ngOnInit() {
  }

}
