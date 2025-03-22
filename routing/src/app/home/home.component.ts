import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy{
  route = inject (ActivatedRoute)
changeId:any;
changeName:any;
subcription!: Subscription
  //user!: { userId: string ,userName: string; } 

  ngOnInit(){
     //this.user = {
      // ul kaliya ayuu badalayaa snapshot
     // userId: this.route.snapshot.params['id'],
      //userName: this.route.snapshot.params['name'] 

      //isticmaal paramMap iyo subsc
      //userId: this.route.snapshot.paramMap.get['id'],
      //userName: this.route.snapshot.paramMap.get['name']
      //waa isticmaali kartaa 
    /*   this.changeId= this.route.snapshot.paramMap.get('id')
      this.changeName= this.route.snapshot.paramMap.get('name') */
    /*   this.route.paramMap.subscribe(res =>{
        this.changeId= res.get('id');
        this.changeName= res.get('name');
      }) */

    this.subcription=    this.route.paramMap.subscribe(res =>{
          this.changeId= res.get('id');
          this.changeName= res.get('name');
        })
     } 

     ngOnDestroy(): void {
         this.subcription.unsubscribe();
     }
  }

