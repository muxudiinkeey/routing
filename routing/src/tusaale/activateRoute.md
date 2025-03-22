
```text
snapshot ma badalayo root url
```

```html
<div class="container">
    <div class="center " style="background-color: lightblue; ">

 <h2 class="text-center"> user ID:{{user.userId}}</h2>
 <h2 class="text-center"> user name:{{user.userName}}</h2>
</div>
    
</div>
```
----------------
```typescript
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


  user!: { userId: string ,userName: string; } 

  ngOnInit(){
     this.user = {
      userId: this.route.snapshot.params['id'],
      userName: this.route.snapshot.params['name']
     } 
  }
}
```
```typescript
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
  ```