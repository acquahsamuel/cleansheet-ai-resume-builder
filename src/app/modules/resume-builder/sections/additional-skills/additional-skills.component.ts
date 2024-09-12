import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-additional-skills',
  templateUrl: './additional-skills.component.html',
  styleUrls: ['./additional-skills.component.scss']
})

export class AdditionalSkillsComponent implements OnInit {
  skillsForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.skillsForm = this.fb.group({
      skills: this.fb.array([])
    });

    // Load skills from local storage if available
    this.loadSkillsFromLocalStorage();
  }

  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  addSkill(skill: string): void {
    if (skill) {
      this.skills.push(this.fb.control(skill));
    }
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  saveToLocalStorage(): void {
    localStorage.setItem('skillsData', JSON.stringify(this.skillsForm.value));
  }

  loadSkillsFromLocalStorage(): void {
    const savedData = localStorage.getItem('skillsData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      if (parsedData.skills) {
        parsedData.skills.forEach((skill: string) => this.addSkill(skill));
      }
    }
  }
}
