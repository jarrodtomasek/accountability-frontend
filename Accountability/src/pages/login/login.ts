import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Angular Forms
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

// Pages
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(public navCtrl: NavController,
              private fb: FormBuilder) {

  }


  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }


  btnLogin(): void {

  }

  btnRegister(): void {
    this.navCtrl.push(RegisterPage);
  }

  showErrors() {
    console.log("Erros")
  }
}
