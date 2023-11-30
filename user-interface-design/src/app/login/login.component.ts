import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SubmitService } from '../submit.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  template: `
    <div class="grid-container">
      <div class="bg-img"></div>
      <div class="form-group">
        <form [formGroup]="applyLogin" (submit)="loginForm()" class="form">
          <h2 class="heading">Login</h2>

          <div class="inputs">
            <label for="email">E-mail</label>
            <input type="email" formControlName="email" id="email" placeholder="Email">
          </div>

          <div class="inputs">
            <label for="password">Password</label>
            <input type="password" formControlName="password" id="password" placeholder="*********">
          </div>

          <button type="submit" class="btn-primary">Login</button>

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
  submitService = inject(SubmitService)
  applyLogin = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  loginForm() {
    this.submitService.loginForm(
      this.applyLogin.value.email ?? '',
      this.applyLogin.value.password ?? ''
    )
  }
}
