import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mat-form',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    //  FormBuilder,
    //FormGroup,
    // Validators,
    RouterModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class MatFormComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dob: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      alert('Form Submitted Successfully!');
    } else {
      alert('Please fix the errors.');
    }
  }
}
