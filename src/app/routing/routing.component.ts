import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css'],
})
export class RoutingComponent {

  ngOnInit() {
    // learn observable
    // observable is like a function bur better
    const obTest = new Observable((observer) => {
      observer.next("from observable");
      observer.next(1);
      observer.next(2);
      observer.complete();
    }).subscribe((data) => {
      console.log(data);
    });
    obTest.unsubscribe(); // stop observable!

    // if on function like this
    const obFunc = () => {
      return '1';
      return '2';
    };
  }
}
