import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  flag = false;
  constructor() { }

  users = ['Fabio', 'Lorenzo', 'Simone'];

  ngOnInit(): void {
  }

}
