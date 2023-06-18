import { Component } from '@angular/core';
import { FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css'],
})
export class FormControlComponent {
  form: any;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      address: fb.group({
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
      }),
      skills: fb.array([]),
    })
  }
  get username() {
    return this.form.get('username');
  }
  get email() {
    return this.form.get('email');
  }
  get street() {
    return this.form.get('address.street');
  }
  get city() {
    return this.form.get('address.city');
  }
  get Skills() {
    return this.form.get('skills') as FormArray;
  }

  onSubmit(): void {
    console.log(this.form?.value);
  }

  addSkill(skill: HTMLInputElement): void {
    this.Skills.push(
      new FormControl(skill.value)
    )
    console.log(this.form.value)
  }
  rmvSkill(index: number): void {
    this.Skills.removeAt(index);
  }

}
