import { Component } from '@angular/core';
import { post } from '../service/post.service';

@Component({
  selector: 'app-post-ser-public',
  templateUrl: './post-ser-public.component.html',
  styleUrls: ['./post-ser-public.component.css'],
})
export class PostSerPublicComponent {
  listArray;
  constructor() {
    const postList = new post();
    this.listArray = postList.postList;
  }
}
