import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-native-events',
  templateUrl: './native-events.component.html',
  styleUrls: ['./native-events.component.scss']
})
export class NativeEventsComponent implements OnInit {

  clickButtonFlag: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  pressButton() {
    console.log("I'am an Event events - click button")
    this.clickButtonFlag = true;
  }
}
