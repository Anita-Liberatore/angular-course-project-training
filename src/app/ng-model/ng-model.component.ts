import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent implements OnInit {

  oneWayBinding = 'guest'
  twoWayBinding = 'Mario'
  constructor() { 
        setTimeout(() => {
            this.oneWayBinding = 'Mario'
        }, 2000);
  }

  ngOnInit(): void {
  }

}
