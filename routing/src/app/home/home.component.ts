import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  route = inject (ActivatedRoute)


  user!: { userId: string; userName: string; } 

  ngOnInit(){
     this.user = {
      userId: this.route.snapshot.params['id'],
      userName: this.route.snapshot.params['name']
     } 
  }
}
