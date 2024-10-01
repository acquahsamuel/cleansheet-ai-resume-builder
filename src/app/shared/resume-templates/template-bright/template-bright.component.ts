import { Component, OnInit, Input, Output } from "@angular/core";

@Component({
  selector: "app-template-bright",
  templateUrl: "./template-bright.component.html",
  styleUrls: ["./template-bright.component.scss"],
})
export class TemplateBrightComponent implements OnInit {
  HEADERINFO: any;
  @Input() selectedTemplate!: string;
  @Input() name!: string;
  @Input() jobTitle!: string;
  @Input() experience!: any[];
  @Input() education!: string;
  @Input() publications!: any[];
  @Input() skills!: any[];
  @Input() summary!: string;

  
  @Input() showActions!: boolean;
  @Output() showActionsChange = new Output();

  constructor() {}

  ngOnInit(): void {
    
  }



  fetchAllSubmitedData() {
    this.HEADERINFO = JSON.parse(localStorage.getItem("HEADERINFO"));
    console.log(this.HEADERINFO, "Header info");
  }


  
}
