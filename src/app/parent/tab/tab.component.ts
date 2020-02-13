import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() myinput: any;
  profilForm = new FormGroup({
    firstName: new FormControl('', [Validators.required , Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required ]),
    phone: new FormControl('', [ Validators.required]),
    birth: new FormControl('' , [Validators.required]),
   kind: new FormControl('', [Validators.required]),
  });
index: number ;

  constructor() { }

  ngOnInit() {
    this.profilForm = new FormGroup({
      firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    birth: new FormControl('' ),
   kind: new FormControl(''),
  });
  }
  deleteRow(i) {
    this.myinput.splice( i , 1 );
  }
  update() {
this.myinput[this.index] = this.profilForm.value;
  }
  getuser( i) {
   this. profilForm = new FormGroup({
    firstName: new FormControl(this.myinput[i].firstName),
    lastName: new FormControl(this.myinput[i].lastName),
    email: new FormControl(this.myinput[i].email),
    phone: new FormControl(this.myinput[i].phone),
    birth: new FormControl(this.myinput[i].birth),
   kind: new FormControl(this.myinput[i].kind),
  });
   this.index = i;
  }

}
