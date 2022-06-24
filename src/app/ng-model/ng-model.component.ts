import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent implements OnInit {
  users: string[] = [];

  oneWayBinding: string | undefined;

  constructor() { 
    console.log("ok - constructor")

  }

  ngOnInit(): void {    console.log("ok - ng on init")

  }


  add(form: any) {
    console.log(form.value);
    this.users.push(form.value.oneWayBinding)
  }

}
