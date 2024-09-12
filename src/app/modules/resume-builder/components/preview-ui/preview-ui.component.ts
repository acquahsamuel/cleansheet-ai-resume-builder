import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-ui',
  templateUrl: './preview-ui.component.html',
  styleUrls: ['./preview-ui.component.scss']
})
export class PreviewUiComponent  {


  resumeData = {
    name: '',
    jobTitle: '',
    email: '',
    location: ''
  };

  constructor() {
    // Retrieve data from local storage
    const savedData = localStorage.getItem('resumeData');
    if (savedData) {
      this.resumeData = JSON.parse(savedData);
    }

    window.addEventListener('storage', (event) => {
      if (event.key === 'resumeData') {
        this.resumeData = JSON.parse(event.newValue || '{}');
      }
    });
  }
}
