import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-example',
  templateUrl: './ng-if-example.component.html',
  styleUrls: ['./ng-if-example.component.scss']
})
export class NgIfExampleComponent implements OnInit {

  users: any[] | undefined;
  constructor(private http: HttpClient) { }

  //set a timeout to timeout api
  ngOnInit(): void {
    setTimeout(() => {
      this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
        .subscribe(res => this.users = res);
    }, 2000);
  }

}
