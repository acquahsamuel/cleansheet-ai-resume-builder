import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
 
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./modules/auth/auth.routes').then((m) => m.AuthRoutes),
  // },
  {
    path: '',
    component : AppComponent
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/resume-builder/resume-builder.routes').then(
        (m) => m.ResumeBuiderRoutes
      ),
  },
];
