import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-sk',
  templateUrl: './template-sk.component.html',
  styleUrls: ['./template-sk.component.scss']
})
export class TemplateSkComponent implements OnInit {
  HEADERINFO : any;
  constructor() { }

  ngOnInit(): void {
    this.fetchAllSubmitedData();
  }



  fetchAllSubmitedData(){
     this.HEADERINFO =  JSON.parse(localStorage.getItem("HEADERINFO"));
    console.log(this.HEADERINFO, "Header info");
  }
}
