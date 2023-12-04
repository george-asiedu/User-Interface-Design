import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';

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
            <img [src]="imageUrl || 'assets/person.svg'" alt="person-icon">
          </div>
          <input type="file" (change)="onFileSelected($event)" style="display: none;" #fileInput />
          <button type="button" class="btn" (click)="fileInput.click()">{{ buttonText }}</button>
          <button type="button" class="skip-btn">Skip</button>
        </div>
      </div>
    </div>
  `,
  styleUrl: './add-photo.component.css'
})
export class AddPhotoComponent {
  imageUrl: string | null = null;
  buttonText: string = "Upload a photo";

  constructor(private router: Router) {}

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.previewImage(file);
    this.buttonText = "Continue";
    this.navigateToInterestPage();
  }

  previewImage(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
  }

  private navigateToInterestPage(): void {
    // Add the route path to navigate to
    this.router.navigate(['interest']);
  }
}
