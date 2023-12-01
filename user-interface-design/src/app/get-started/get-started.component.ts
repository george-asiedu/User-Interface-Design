import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [HeaderComponent],
  template: `
    <div class="grid-container">
      <div class="bg-img"></div>
    </div>
  `,
  styleUrl: './get-started.component.css'
})
export class GetStartedComponent {

}
