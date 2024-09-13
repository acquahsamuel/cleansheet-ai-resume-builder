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
  LINKS = [];

  constructor() {}

  ngOnInit(): void {}

  getInteractionPrompt() {}

  logout() {}
}
