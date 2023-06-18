import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  listArray: Array<string> = ['angular', 'react', 'vue', 'angular', 'react', 'vue'];

  // bug eslint item.name undefined so must use any
  objArray: Array<any> = [
    {
      id: 1,
      name: 'angular',
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    },
    {
      id: 2,
      name: 'react',
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    },
    {
      id: 3,
      name: 'vue',
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    }
  ]

  // change detection
  // no re render
  addArray(){
    this.listArray.push('nextjs')
  }
  rmvArray(item: number){
    this.listArray.splice(item, 1)
  }

  // fetch logic
  resultarray: Array<string> = [];
  addResult(){
    this.resultarray.push("data 1")
  }
  rmvResult(id: number){
    this.resultarray.splice(id, 1)
  }
}
