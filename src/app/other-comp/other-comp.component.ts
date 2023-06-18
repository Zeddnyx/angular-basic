import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-other-comp',
  templateUrl: './other-comp.component.html',
  styleUrls: ['./other-comp.component.css']
})
export class OtherCompComponent {

  @Input() fromOtherComp: string;
}
