 
import { Component } from '@angular/core';

@Component({
  selector: 'app-builder-ui',
  templateUrl: './builder-ui.component.html',
  styleUrls: ['./builder-ui.component.scss']
})
export class BuilderUiComponent   {
  resumeData = {
    name: '',
    jobTitle: '',
    email: '',
    location: ''
  };

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor() {
    // Load existing data from local storage
    const savedData = localStorage.getItem('resumeData');
    if (savedData) {
      this.resumeData = JSON.parse(savedData);
    }
  }


  

  saveToLocalStorage() {
    localStorage.setItem('resumeData', JSON.stringify(this.resumeData));
  }
}
