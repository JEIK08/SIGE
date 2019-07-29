import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() columnHeaders: string[];
  @Input() data: object[];
  @Input() headerToData: object;

  getValsFromObject(obj: object): string[]{
    let vals =[];
    /*
    console.log(this.columnHeaders);
    console.log(this.data);
    console.log(this.headerToData);
    */
    this.columnHeaders.forEach(header => {
      vals.push(obj[this.headerToData[header]]);
    });
    return vals;
  }

  constructor() { }

  ngOnInit() {
  }

  getAttr(obj, attr){
    console.log(obj[attr])
    return obj[attr];
  }

}
