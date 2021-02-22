import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private loginForm: FormGroup;
  constructor(private fb:FormBuilder, private router: Router) { 

    this.loginForm = this.fb.group({
      mobileNumber: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  logForm(){
    console.log(this.loginForm.value);

    if (this.loginForm.value.mobileNumber == "0000" && this.loginForm.value.password == "udara") {
      console.log("login success");
      this.router.navigate(['/list'], { replaceUrl: true });
    }
    
  }

  ngOnInit() {
  }

  register(){
    this.router.navigate(['/register'], { replaceUrl: true });
  }

}
