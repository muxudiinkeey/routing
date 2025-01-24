import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: Iusers[] = [];
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
    email: string
}
