import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatBadgeModule, MatIconModule, MatSlideToggleModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  felhasznaloNev = '';
  keresztNev = '';
  vezetekNev = '';
  profilKep: string = '7705305.jpg';
  menuNyitva = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const adat = JSON.parse(localStorage.getItem('felhasznalo') || '{}');
    if (!adat.email) {
      this.router.navigate(['/login']);
    }

    this.keresztNev = adat.keresztnev;
    this.vezetekNev = adat.vezeteknev;
    this.felhasznaloNev = `${this.keresztNev} ${this.vezetekNev}`;
    this.profilKep = adat.profilKep || '7705305.jpg';
  }

  kijelentkezes() {
    this.router.navigate(['/login']);
  }

  toggleMenu() {
    this.menuNyitva = !this.menuNyitva;
  }

  darkMode = false;

toggleDarkMode(value: boolean) {
  this.darkMode = value;
  const body = document.body;
  if (this.darkMode) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}
uzenetekSzama = 3;
  
  
}
