import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  myComponents= 'rooms componenets';

  numberOfRooms = 10;

  hideRooms = false

  toggle(){
    this.hideRooms = !this.hideRooms
  }

  @Input() fromParent: string;

  otherCompMsg = "msg from other component"
}
