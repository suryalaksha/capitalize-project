import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [FormsModule, MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true,
})
export class Login {
  emailAddress: string | undefined;
  password: string | undefined;
  constructor() {
    this.emailAddress = 'bdjwwj@gmail.com';
    this.password = '584--0';
  }
  userSignUp() {
    alert(this.emailAddress);
    alert(this.password);
  }
}
