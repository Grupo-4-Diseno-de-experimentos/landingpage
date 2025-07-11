import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {window} from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuOpen: boolean = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  protected readonly window = window;
}
