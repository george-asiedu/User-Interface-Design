import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <div class="header">
      <div class="back">
        <img src="assets/Left.svg" alt="back-arrow-image">
        <p>Back</p>
      </div>
      <span>
        <b>Step 2</b> of 4
      </span>
      <p class="exit">Exit</p>
    </div>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
