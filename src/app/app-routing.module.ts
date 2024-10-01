import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/user-auth-routing.module')
        .then((m) => m.UserAuthRoutingModule),
  },
  {
    path: 'builder',
    loadChildren: () =>
      import('./modules/resume-builder/resume-builer.module')
        .then((m) => m.ResumeBuilerModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
