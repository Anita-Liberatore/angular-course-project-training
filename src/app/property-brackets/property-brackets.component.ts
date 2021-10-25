import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-brackets',
  templateUrl: './property-brackets.component.html',
  styleUrls: ['./property-brackets.component.scss']
})
export class PropertyBracketsComponent implements OnInit {
  image: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  load() {
    this.image = 'https://angular.io/assets/images/logos/angular/angular.png';
  }

  unload() {
    this.image = '';
  }

}
