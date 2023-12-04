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

        <button class="btn-primary" type="button">Continue</button>
      </div>
    </div>
  `,
  styleUrl: './complete.component.css'
})
export class CompleteComponent {

}
