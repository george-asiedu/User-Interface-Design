import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [HeaderComponent],
  template: `
    <div class="grid-container">
      <div class="bg-img"></div>
      <div class="started-container">
        <app-header></app-header>
        <div class="started-box">
          <h2 class="heading">Let's get started by <br> picking some interests</h2>
          <p>Alright, let's pick something we're interested in and get started!</p>
          <div class="interest-box">
            <div class="box gaming">
              <h5>Gaming</h5>
              <div class="add">
                <button class="add-btn" type="button">Added</button>
                <img src="assets/done.svg" alt="done-icon">
              </div>
            </div>

            <div class="box fashion">
              <h5>Fashion</h5>
              <div class="block">
                <button class="add-btn" type="button">Add</button>
              </div>
            </div>

            <div class="box music">
              <h5>Music</h5>
              <div class="block">
                <button class="add-btn" type="button">Add</button>
              </div>
            </div>

            <div class="box reading">
              <h5>Reading</h5>
              <div class="block">
                <button class="add-btn" type="button">Add</button>
              </div>
            </div>
          </div>

          <button class="btn" type="button">Continue</button>
        </div>
      </div>
    </div>
  `,
  styleUrl: './get-started.component.css'
})
export class GetStartedComponent {

}
