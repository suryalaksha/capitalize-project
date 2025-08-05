import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { bootstrapApplication } from '@angular/platform-browser';
//import { appConfig } from './app/app.config';
//import { Mat } from './app/mat';

//bootstrapApplication(Mat, appConfig).catch((err) =>
// console.error(err)
//);

@Component({
  selector: 'app-mat',
  imports: [
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  templateUrl: './mat-form.html',
  styleUrl: './mat-form.css',
  standalone: true,
})
export class Mat {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  dateOfBirth: string | undefined;
  constructor() {
    this.name = '';
    this.email = '';
    this.password = '';
    this.dateOfBirth = '';
  }
  userSignUp() {
    alert(this.name);
    alert(this.email);
    alert(this.password);
    alert(this.dateOfBirth);
  }
}
