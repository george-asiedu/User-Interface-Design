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
    </div>
  `,
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
