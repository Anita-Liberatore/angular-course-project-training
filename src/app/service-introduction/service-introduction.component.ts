import { Component, OnInit } from '@angular/core';
import { Utility } from './utility';

@Component({
  selector: 'app-service-introduction',
  templateUrl: './service-introduction.component.html',
  styleUrls: ['./service-introduction.component.scss']
})
export class ServiceIntroductionComponent implements OnInit {
  response: number = 0;
  
  constructor(private utility: Utility) {
    this.response = this.utility.add(1, 4)
    console.log(this.response);
   }

   //in this example , we have a dependency injection on constructor and console log of method add from Utility class

  ngOnInit(): void {
    console.log("ciao")
  }

  //in this part of class, ciao print after add utility

}
