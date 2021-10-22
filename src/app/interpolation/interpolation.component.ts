import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {

  label = 'Mario Rossi';
  gender = 'M';
  interpolationExample = 'Hi, I am here for interpolation example';
  
  constructor() { }

  ngOnInit(): void {
  }

}
