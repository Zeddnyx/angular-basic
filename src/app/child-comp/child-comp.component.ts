import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent {

  msgFromChildComp: string = "msg from child componenet in root app";

  outputChildMsg: string = "mesage from child componenet via output";

  @Output() msgEvent = new EventEmitter<string>();
  handleClick() {
    console.log("clcicked");
    // acces var outputChildMsg using emit
    this.msgEvent.emit(this.outputChildMsg);
    // this.msgEvent.emit(this.msgFromChildComp);
  }
}
