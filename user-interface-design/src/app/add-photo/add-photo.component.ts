import { Component } from '@angular/core';

@Component({
  selector: 'app-add-photo',
  standalone: true,
  imports: [],
  template: `
    <div class="grid-container">
      <div class="bg-img"></div>
      <div class="photo-container">
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
      </div>
    </div>
  `,
  styleUrl: './add-photo.component.css'
})
export class AddPhotoComponent {

}
