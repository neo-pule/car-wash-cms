import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../services/auth-guard.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  passForm= this.fb.group({

    email: [null, Validators.compose([ Validators.pattern('^[a-zA-Z_.+-]+@[a-zA-Z-]+.[a-zA-Z0-9-.]+$'), Validators.required])],

  });
  loginForm= this.fb.group({

    email: [null, Validators.compose([ Validators.pattern('^[a-zA-Z_.+-]+@[a-zA-Z-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
    password: [null, Validators.compose([ Validators.minLength(6), Validators.maxLength(12), Validators.required])],

  });
  flag : boolean = false;
  constructor(private fb: FormBuilder,private auth :AuthGuardService,private route :Router,) { }
  login(){
  console.log(this.loginForm.value.email)
}

  loginFrm(){
    this.flag = false;
    // this.route.navigateByUrl('home')
  }
  passFrm(){
    this.flag = true;
  }
  signIn(){
      // console.log(this.passForm.value.email)

    let email = this.loginForm.value.email;
    let pass = this.loginForm.value.password;
    this.auth.logIn(email,pass);
  }
  resetPassword(){
    // console.log(this.passForm.value.email)
    let email = this.passForm.value.email;
    this.auth.resetPass(email);
  }
  ngOnInit(): void {
  }

}
