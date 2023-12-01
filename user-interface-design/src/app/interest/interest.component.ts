import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-interest',
  standalone: true,
  imports: [HeaderComponent],
  template: `
    <div class="grid-container">
      <div class="bg-img"></div>
      <div class="interest-container">
        <app-header></app-header>
      </div>
    </div>
  `,
  styleUrl: './interest.component.css'
})
export class InterestComponent {

}
