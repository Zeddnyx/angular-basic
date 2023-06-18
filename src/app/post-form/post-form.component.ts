import { Component } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent {
  inputUser: string;
  inpurArea: string;
  addImg: string;
  addLink: string;
  addBg: boolean = false;
}
