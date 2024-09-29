import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "src/app/shared/services/auth-guard.service";
import { ResumeBuilderComponent } from "./resume-builder.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { AtsAnalysisComponent } from "./pages/ats-analysis/ats-analysis.component";
import { CvRewriteComponent } from "./pages/cv-rewrite/cv-rewrite.component";
import { StartedComponent } from "./pages/started/started.component";
import { CvBuilderStartComponent } from "./pages/cv-builder-start/cv-builder-start.component";

const routes: Routes = [
  {
    path: "",
    component: ResumeBuilderComponent,

    children: [
      {
        path: "",
        component: StartedComponent,
      },
      {
        path: "resume-builder",
        component: CvBuilderStartComponent,
      },
      {
        path: "settings",
        component: SettingsComponent,
      },
      {
        path: "ats-analysis",
        component: AtsAnalysisComponent,
      },
      {
        path: "cv-rewrite",
        component: CvRewriteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeBuilderRoutingModule {}
