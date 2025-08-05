import { Login } from './login/login/login';
import { Ecom } from './features/ecom/ecom/ecom';
import { Todo } from './features/todo/todo/todo';
import { MatFormComponent } from './app';

export const routes = [
  { path: 'login', component: Login },
  { path: 'ecom1', component: Ecom },
  { path: 'todo', component: Todo },
  { path: 'mat-form', component: MatFormComponent },
];
