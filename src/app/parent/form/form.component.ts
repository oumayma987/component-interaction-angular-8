import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() myOutput =  new EventEmitter<any>();
   profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required , Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required ]),
    phone: new FormControl('', [ Validators.required , Validators.minLength(7)]),
    birth: new FormControl('' , [Validators.required]),
   kind: new FormControl('', [Validators.required]),

  });

  constructor() { }

  ngOnInit() {
  }
  add() {
this.myOutput.emit(this.profileForm.value);
  }

}
