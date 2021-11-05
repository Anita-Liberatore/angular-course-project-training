import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-ng-for-type-object',
  templateUrl: './ng-for-type-object.component.html',
  styleUrls: ['./ng-for-type-object.component.scss']
})
export class NgForTypeObjectComponent implements OnInit {

  users: User[] | undefined;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((result: User[]) => this.users = result);
  }
}

