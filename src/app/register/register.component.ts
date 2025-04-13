import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  regisztraciosUrlap: FormGroup;

  napok = Array.from({ length: 31 }, (_, i) => i + 1);
  honapok = ['jan', 'febr', 'márc', 'ápr', 'máj', 'jún', 'júl', 'aug', 'szept', 'okt', 'nov', 'dec'];
  evek = Array.from({ length: 100 }, (_, i) => 2025 - i);

  constructor(private fb: FormBuilder) {
    this.regisztraciosUrlap = this.fb.group({
      keresztnev: ['', Validators.required],
      vezeteknev: ['', Validators.required],
      nap: ['', Validators.required],
      honap: ['', Validators.required],
      ev: ['', Validators.required],
      nem: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      jelszo: ['', Validators.required]
    });
  }

  kuldes() {
    if (this.regisztraciosUrlap.valid) {
      const adatok = this.regisztraciosUrlap.value;

      // Mentés például localStorage-be
      localStorage.setItem('felhasznalo', JSON.stringify(adatok));

      // Átirányítás a belépési oldalra
      window.location.href = '/login';
    }
  }

  visszaALepeoldalra() {
    window.location.href = '/login';
  }
  
}
