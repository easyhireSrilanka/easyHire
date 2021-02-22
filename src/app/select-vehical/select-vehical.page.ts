import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-select-vehical',
  templateUrl: './select-vehical.page.html',
  styleUrls: ['./select-vehical.page.scss'],
})
export class SelectVehicalPage implements OnInit {

  constructor(private fb: FormBuilder) { }

  districtForm = this.fb.group({
    driverType:[''],
    district: [''],
    vehicalType: ['']
  });

  ngOnInit() {
  }
  findVehical(){
    console.log(this.districtForm.value);
    
  }

}
