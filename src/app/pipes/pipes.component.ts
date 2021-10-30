import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  today = Date.now();
  yourmoney = 1200;

  yourbitcoins = 0.12345;
  yourJSON = {
    id: 1,
    name: 'Anita'
  }

  birtdayVariable = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
