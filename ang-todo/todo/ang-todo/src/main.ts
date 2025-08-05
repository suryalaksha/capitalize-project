import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MatFormComponent } from './app/app';
//import { MatFormComponent } from './app';

bootstrapApplication(MatFormComponent, appConfig).catch((err) =>
  console.error(err)
);
