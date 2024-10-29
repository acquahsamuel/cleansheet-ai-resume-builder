import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { NzLayoutComponent, NzSiderComponent, NzHeaderComponent, NzContentComponent } from "ng-zorro-antd/layout";
import { NzMenuDirective, NzSubMenuComponent, NzMenuItemComponent } from "ng-zorro-antd/menu";
import { ɵNzTransitionPatchDirective } from "ng-zorro-antd/core/transition-patch";
import { NzIconDirective } from "ng-zorro-antd/icon";
import { CommonModule } from "@angular/common";
 

@Component({
    selector: "app-resume-builder",
    templateUrl: "./resume-builder.component.html",
    styleUrls: ["./resume-builder.component.scss"],
    standalone: true,
    imports: [
        NzLayoutComponent,
        NzSiderComponent,
        NzMenuDirective,
        ɵNzTransitionPatchDirective,
        NzSubMenuComponent,
        NzMenuItemComponent,
        RouterLink,
        NzHeaderComponent,
        NzIconDirective,
        CommonModule,
        NzContentComponent,
        RouterOutlet,
    ],
})
export class ResumeBuilderComponent implements OnInit {
  isLoading = false;
  isCollapsed = true;

  constructor(
    private chr : ChangeDetectorRef,
    private router : Router
  ) {}

  ngOnInit(): void {}

  getInteractionPrompt() {}

  logout() {
    this.router.navigate(["/auth/login"]);
  }

  OnInit() {}

  title = "Cleansheet";

  LINKS = [
    { path: "/builder/resume-builder", icon: "format_shapes", title: "Resumes" },
    { path: "/builder/ats-analysis", icon: "attach_file", title: "ATS Analyzer" },
    { path: "/builder/cv-rewrite", icon: "insert_drive_file", title: "CV Rewrite"}
  ];
}
