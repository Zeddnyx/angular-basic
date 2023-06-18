import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handle',
  templateUrl: './event-handle.component.html',
  styleUrls: ['./event-handle.component.css']
})
export class EventHandleComponent {

  onKeyUp($event: any) {
    console.log("enter", $event.target.value);
  }
  onKeyUpUser(user: string){
    console.log(user);
  }
  // data banding ngModel
  userName: string;
  onKeyUpUserName(){
    console.log(this.userName);
  }

  inital: string= "inital value"
  initalVal(){
    console.log(this.inital);
  }
}
