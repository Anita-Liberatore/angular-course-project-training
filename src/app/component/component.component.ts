import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
}) //this is a decorator - decorator has selector, templateUrl and styleUrls
export class ComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
