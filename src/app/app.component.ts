import { AfterViewInit, Component, isDevMode, OnInit, Renderer2 } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit{
  constructor() {}

  ngOnInit(): void {
    if(isDevMode()){
      console.log('Development mode!');
    }else{
      console.log('Production mode!');
    }
  }

  title = "Workport";
  links = [
    { path: "/home", icon: "home", title: "Home" },
    { path: "/home", icon: "home", title: "Home" },
    { path: "/home", icon: "home", title: "Home" },
    { path: "/home", icon: "home", title: "Home" }
  ];
}
