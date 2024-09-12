import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/resume-builder/resume-builer.module')
        .then((m) => m.ResumeBuilerModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/user-auth-routing.module')
        .then((m) => m.UserAuthRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
