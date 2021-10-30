import { Component, OnInit } from '@angular/core';
import { User } from './users';

@Component({
  selector: 'app-custom-types',
  templateUrl: './custom-types.component.html',
  styleUrls: ['./custom-types.component.scss']
})
export class CustomTypesComponent implements OnInit {

  constructor() { }

  //how do custom type - for example object of users

  ngOnInit(): void {
  }

  users: User[] = [
    { id: 1, name: 'Fabio'},
    { id: 2, name: 'Simone'},
    { id: 3, name: 'Lorenzo'},
  ];

}
