import { Component, Input, OnInit } from '@angular/core';
import { Categories } from '../../constants/app.constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  categories = Categories;

  constructor() {}

  ngOnInit() {
    // this.categories;
    // console.log(this.categories);
  }
}
