import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-resume-builder",
  templateUrl: "./resume-builder.component.html",
  styleUrls: ["./resume-builder.component.scss"],
})
export class ResumeBuilderComponent implements OnInit {
  isLoading = false;
  username = "Samuel";
  userProfile = "./assets/images/placeholder.png";

  constructor() {}

  ngOnInit(): void {}

  getInteractionPrompt() {}

  logout() {}

  OnInit() {}

  title = "Cleansheet";

  LINKS = [
    { path: "/builder/resume-builder", icon: "format_shapes", title: "Resumes" },
    { path: "/builder/ats-analysis", icon: "attach_file", title: "ATS" },
    {
      path: "/builder/cv-rewrite",
      icon: "insert_drive_file",
      title: "CV Rewrite",
    },
    { path: "/builder/settings", icon: "settings", title: "Settings" },
  ];
}
