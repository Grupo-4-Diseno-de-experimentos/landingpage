import { Component } from '@angular/core';
import {LandingComponent} from './landing/pages/landing/landing.component';

@Component({
  selector: 'app-root',
  imports: [LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
