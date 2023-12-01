import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-add-photo',
  standalone: true,
  imports: [HeaderComponent],
  template: `
    <div class="grid-container">
      <div class="bg-img"></div>
      <div class="photo-container">
        <app-header></app-header>
        <div class="add-image-box">
          <h2 class="heading">Add Photo</h2>
          <p class="photo-text">Add a photo so other members know who you are</p>
          <div class="add-img">
            <img src="assets/person.svg" alt="person-icon">
          </div>
          <button type="button" class="btn">Upload a photo</button>
          <button type="button" class="skip-btn">Skip</button>
        </div>
      </div>
    </div>
  `,
  styleUrl: './add-photo.component.css'
})
export class AddPhotoComponent {

}
