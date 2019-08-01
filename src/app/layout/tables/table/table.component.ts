import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() columnHeaders: string[];
  @Input() data: object[];
  @Input() headerToData: object;

  @Output() editEmitter: EventEmitter<object> = new EventEmitter<object>();
  @Output() deleteEmitter: EventEmitter<object> = new EventEmitter<object>();

  getValsFromObject(obj: object): string[] {
    const vals = [];
    this.columnHeaders.forEach(header => {
      vals.push(obj[this.headerToData[header]]);
    });
    return vals;
  }

  constructor() { }

  ngOnInit() {
  }

  getAttr(obj, attr) {
    console.log(obj[attr]);
    return obj[attr];
  }

  edit(row: object) {
    this.editEmitter.emit(row);
  }

  delete(row: object) {
    this.deleteEmitter.emit(row);
  }

}
