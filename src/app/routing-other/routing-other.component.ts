import { Component } from '@angular/core';

@Component({
  selector: 'app-routing-other',
  templateUrl: './routing-other.component.html',
  styleUrls: ['./routing-other.component.css'],
})
export class RoutingOtherComponent {
  routerNested: Array<any> = [
    {
      title: 'Rooms',
      describe:
        'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit',
    },
    {
      title: 'OtherComp',
      describe:
        'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit',
    },
    {
      title: 'otherGain',
      describe:
        'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit',
    },
  ];

}
