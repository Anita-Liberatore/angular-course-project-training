import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styles-components',
  templateUrl: './styles-components.component.html',
  styleUrls: ['./styles-components.component.scss']
})
export class StylesComponentsComponent implements OnInit {

  users = [
    { id: 1, name: 'Fabio', gender: 'M', px: 24},
    { id: 2, name: 'Lisa', gender: 'F', px: 24}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  getClassCss(user: { gender: string; }) {
    return user.gender === 'M' ? 'male': 'fermale';
  }

  getStyle(user: any) {
    return {
      backgroundColor: user.gender === 'M' ? 'black' : 'grey',
      color:user.gender === 'M' ? 'blue' : 'pink',
      fontSize: `${user.age}px`
    };
  }

}
