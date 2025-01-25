import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-det',
  imports: [CommonModule,RouterLink ],
  templateUrl: './user-det.component.html',
  styleUrl: './user-det.component.css'
})
export class UserDetComponent implements OnInit {
id: string | null = '';

constructor(private router: ActivatedRoute){}
ngOnInit(){
// this.id = this.router.snapshot.paramMap.get('id')
// isticmaal params subscribe
this.router.params.subscribe(params =>{
  this.id = params ['id']
})
}

}
