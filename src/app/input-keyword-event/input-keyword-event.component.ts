import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-keyword-event',
  templateUrl: './input-keyword-event.component.html',
  styleUrls: ['./input-keyword-event.component.scss']
})
export class InputKeywordEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = ['Fabio', 'Lorenzo'];
  
  add() {
    console.log('add')
  }

  addValue(x: { target: any; }) {
    console.log('add', x.target.value)

  }

  addValueTwo(x: { target: any; }) {
    console.log('add', x.target.value)

  }

  addValueThree(input: HTMLInputElement) {
    console.log('add', input.value);
    this.users.push(input.value);
    input.value='';
  }

  addUser(input: HTMLInputElement) {
    console.log('add', input.value);
    this.users.push(input.value);
    input.value='';
    input.focus();
  }

}
