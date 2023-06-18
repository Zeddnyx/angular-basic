import { Component } from '@angular/core';
import { SericeService } from '../Services/serice.service';


@Component({
  selector: 'app-post-ser-private',
  templateUrl: './post-ser-private.component.html',
  styleUrls: ['./post-ser-private.component.css'],
})
export class PostSerPrivateComponent {

  listArray: Array<any>;
  constructor(private postArray: SericeService) { // if using dependency injection import ServiceService in app.module also!
    this.listArray = postArray.postList;
  }

  addNewData(){
    let newPost ={
      id: 6, title:"sixth Post"
    }

    // addArray comming from /Serices/serivce
    this.postArray.addArray(newPost);
  }

}
