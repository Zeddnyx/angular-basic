import { Component } from '@angular/core';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css']
})
export class FormTableComponent {

  name: string;
  email: string;
  address: string;

  tableList: any = [

  ]
  onClick() {
    this.tableList.push({
      name: this.name,
      email: this.email,
      address: this.address
    })
  }

  delBtn(index: number) {
    this.tableList.splice(index, 1)
  }
}
