import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "src/app/shared/services/auth-guard.service";
import { ResumeBuilderComponent } from "./resume-builder.component";

const routes: Routes = [
  {
    path: "",
    component: ResumeBuilderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeBuilderRoutingModule {}
