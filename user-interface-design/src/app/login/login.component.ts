import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  template: `
    <div class="grid-container">
      <div class="bg-img"></div>
      <div class="form-group">
        <form [formGroup]="applyLogin" class="form">
          <h2 class="heading">Login</h2>

          <div class="inputs">
            <label for="email">E-mail</label>
            <input type="email" formControlName="email" id="email" placeholder="email">
          </div>

          <div class="inputs">
            <label for="password">Password</label>
            <input type="password" formControlName="password" id="password" placeholder="*********">
          </div>

          <button type="submit">Login</button>

          <p class="text">
            Already have an account? 
            <a routerLink="">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  `,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  applyLogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
}
