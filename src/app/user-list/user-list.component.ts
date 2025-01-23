import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: Iusers[] = [];
  user:[]= []
   http= inject(HttpClient);
private apUrl = 'https://jsonplaceholder.typicode.com/users';

constructor(){
  this.getUsers().subscribe((data: Iusers[])=>{

this.users = data;
  });
}
getUsers(): any {
  return this.http.get(`https://jsonplaceholder.typicode.com/users`);
}
}
export interface Iusers {
  id: number;
  name:string;
  username: string;
  address: string
}
