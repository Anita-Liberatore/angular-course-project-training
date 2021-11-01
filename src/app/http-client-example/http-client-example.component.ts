import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-client-example',
  templateUrl: './http-client-example.component.html',
  styleUrls: ['./http-client-example.component.scss']
})
export class HttpClientExampleComponent implements OnInit {

  users: User[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadUser();
  }


  loadUser() {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(result => {
    this.users = result;
    })
  }

}


interface User {
  id: number;
  name: string;
}