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

        <div class="add-image-box">
          <h2 class="heading">Add Photo</h2>
          <p class="photo-text">Add a photo so other members know who you are</p>
          <div class="add-img">
            <img src="assets/person.svg" alt="person-icon">
          </div>
          <button type="button" class="btn-primary">Upload a photo</button>
          <button type="button" class="skip-btn">Skip</button>
        </div>
      </div>
    </div>
  `,
  styleUrl: './add-photo.component.css'
})
export class AddPhotoComponent {

}
