import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-single',
  templateUrl: './routing-single.component.html',
  styleUrls: ['./routing-single.component.css']
})
export class RoutingSingleComponent {
  params: any;

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('id');
      this.params = id;
      console.log(id); // get param when click route
    });
  }
}
