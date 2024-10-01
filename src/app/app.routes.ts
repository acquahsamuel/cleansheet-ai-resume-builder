import { Routes } from '@angular/router';

export const routes: Routes = [
 
  {
    path: '',
    loadChildren: () =>
      import('./modules/resume-builder/resume-builder.routes').then(
        (m) => m.ResumeBuiderRoutes
      ),
  },
];
