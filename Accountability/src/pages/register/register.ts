import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Angular Forms
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  registerForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ["", Validators.required, Validators.email],
    password: ["", Validators.required],
    confirmPassword: ["", Validators.required]
  })

  constructor(public navCtrl: NavController,
              private fb: FormBuilder) {
  }

  get firstName(): AbstractControl {
    return this.registerForm.get("firstName");
  }

  get lastName(): AbstractControl {
    return this.registerForm.get("lastName");
  }

  get email(): AbstractControl {
    return this.registerForm.get("email");
  }

  get password(): AbstractControl {
    return this.registerForm.get("password");  
  }

  get confirmPassword(): AbstractControl {
    return this.registerForm.get("confirmPassword");
  }

  btnRegister() {

  }
}
