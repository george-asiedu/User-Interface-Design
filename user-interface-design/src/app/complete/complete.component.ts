import { Component } from '@angular/core';

@Component({
  selector: 'app-complete',
  standalone: true,
  imports: [],
  template: `
    <div class="grid-container">
      <div class="bg-img"></div>
      <div class="complete-container">
        <h2 class="heading">Woohoo!</h2>
        <p>
          Hey there! Your registration is complete, 
          get excited for the ultimate quiz experience 
          of your life. Let's do this!
        </p>
        <div class="designs">
          <div class="group-1">
            <img src="assets/Group.svg" alt="">
          </div>
          <div class="group-2">
            <img src="assets/Group-2.svg" alt="">
          </div>
          <div class="group-3">
            <img src="assets/Group-3.svg" alt="">
          </div>
          <div class="group-4">
            <img src="assets/Group-4.svg" alt="">
          </div>
          <div class="group group-5">
            <img src="assets/Group-5.svg" alt="">
          </div>
          <div class="group-6">
            <img src="assets/Group-6.svg" alt="">
          </div>
          <div class="group-7">
            <img src="assets/Group-7.svg" alt="">
          </div>
          
        </div>
        <button class="btn-primary" type="button">Continue</button>
      </div>
    </div>
  `,
  styleUrl: './complete.component.css'
})
export class CompleteComponent {

}
