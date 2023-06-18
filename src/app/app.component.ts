import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildCompComponent } from './child-comp/child-comp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// using implement AfterViewInit when passing data from child to parent only!!!
export class AppComponent implements AfterViewInit {
  title = 'first-app';
  parentMsg = 'component parent app inside rooms';
  messageChild: string;
  messageOutput: string;
  imgUrl: string = 'https://angular.io/assets/images/logos/angular/angular.svg';

  // child components inside app root
  @ViewChild(ChildCompComponent) childComp: ChildCompComponent;

  // constructor() {
    // console.log(this.childComp); // undefined
    // constructor will load imediatly so first ChildCompComponent will undefined
    // to access ChildCompComponent we need to use @AfterViewInit
  // }

  ngAfterViewInit() {
    console.log(this.childComp);
    this.messageChild = this.childComp.msgFromChildComp;
  } // warning ExpressionChangedAfterItHasBeenCheckedError

  receiveMsg($event: string) {
    console.log($event);
    this.messageOutput = $event;
  }

  // data binding
  bool: boolean = true

  customePipeText: string = 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit';
}
