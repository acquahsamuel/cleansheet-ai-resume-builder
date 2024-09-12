import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-bright',
  templateUrl: './template-bright.component.html',
  styleUrls: ['./template-bright.component.scss']
})
export class TemplateBrightComponent implements OnInit {
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
