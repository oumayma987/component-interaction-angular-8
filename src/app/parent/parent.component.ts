import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
table  = [];
  ngOnInit() {
  }
  Get(data) {
    console.log(data);
    this.table.push(data);
  }

}
