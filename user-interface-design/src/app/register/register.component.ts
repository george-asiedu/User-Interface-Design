import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="grid-container">
      <div class="bg-img"></div>
      <form [formGroup]="newAccountForm">
        <h2 class="heading">Create Account</h2>
        <div class="inputs">
          <label for="name">Name</label>
          <input type="text" formControlName="name" id="name" placeholder="John Doe">
        </div>

        <div class="inputs">
          <label for="email">Email</label>
          <input type="email" formControlName="email" id="name" placeholder="johndoe@gmail.com">
        </div>

        <div class="inputs">
          <label for="password">Password</label>
          <input type="password" formControlName="password" id="**********">
        </div>

        <button type="submit" [disabled]="!newAccountForm.valid" class="btn-primary">Create Account</button>

        <div class="google">Sign up with Google</div>
        <p class="text">
          Already have an account?
          <a href="">Login</a>
        </p>
      </form>
    </div>
  `,
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  newAccountForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
}
