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
        <div class="interest-box">
          <h2 class="heading">Hey there! What brings you here?</h2>
          <p class="interest-text">This will help us make great recommendations.</p>
          <div class="select-box">
            <div class="select">
              <img src="assets/add.svg" alt="add-ico">
              <p>Social interaction</p>
            </div>

            <div class="select">
              <img src="assets/add.svg" alt="add-ico">
              <p>Personal development</p>
            </div>

            <div class="select">
              <img src="assets/add.svg" alt="add-ico">
              <p>Entertainment and fun</p>
            </div>

            <div class="select">
              <img src="assets/add.svg" alt="add-ico">
              <p>Rewards and recognition</p>
            </div>
          </div>

          <button type="button" class="btn">Continue</button>
        </div>
      </div>
    </div>
  `,
  styleUrl: './interest.component.css'
})
export class InterestComponent {

}
