import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
public registerForm: FormGroup;
  constructor(private fb:FormBuilder) { 
    this.registerForm = this.fb.group({
      name:[''],
      mobileNo:[''],
      nic:[''],
      password:['']
    })
  }

  ngOnInit() {
  }

  onChangeEvent(event: any){

    console.log(event.target.value);

  }

}
