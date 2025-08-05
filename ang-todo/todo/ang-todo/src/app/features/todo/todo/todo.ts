import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
  standalone: true,
})
export class Todo {
  enterTask: string | undefined;
  addTask: string | undefined;
  constructor() {
    this.enterTask = 'marathon';
    this.addTask = '';
  }

  userSignUp() {
    alert(this.enterTask);
    alert(this.addTask);
  }
}
