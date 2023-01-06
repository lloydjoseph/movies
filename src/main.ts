import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import data from './assets/json/movie.json';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
