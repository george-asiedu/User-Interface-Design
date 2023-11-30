import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SubmitService } from '../submit.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="grid-container">
      <div class="bg-img"></div>

      <div class="form-group">
        <form [formGroup]="newAccountForm" (submit)="submitForm()" class="form">
          <h2 class="heading">Create Account</h2>

          <div class="inputs">
            <label for="name">Name</label>
            <input type="text" formControlName="name" id="name" placeholder="John Doe">
          </div>

          <div class="inputs">
            <label for="email">E-mail</label>
            <input type="email" formControlName="email" id="name" placeholder="johndoe@gmail.com">
          </div>

          <div class="inputs">
            <label for="password">Password</label>
            <input type="password" formControlName="password" id="password" placeholder="********">
          </div>

          <button type="submit" [disabled]="!newAccountForm.valid" class="btn-primary">Create Account</button>

          <div class="google">
            <img src="assets/Google-logo.png" alt="google-logo">
            <p class="google-text">Sign up with Google</p>
          </div>
          <p class="text">
            Already have an account?
            <a href="">Login</a>
          </p>
        </form>
      </div>
    </div>
  `,
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  submitService = inject(SubmitService)

  newAccountForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  submitForm() {
    this.submitService.submitForm(
      this.newAccountForm.value.name ?? '',
      this.newAccountForm.value.email ?? '',
      this.newAccountForm.value.password ?? ''
    )
  }
}
