import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private fb: FormBuilder, private router:Router) {}



  findVehical(){
    this.router.navigate(['/select-vehical'], { replaceUrl: true });
  }
  addVehical(){
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
