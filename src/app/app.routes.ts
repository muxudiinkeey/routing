import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact',
loadComponent:() => import('./contact/contact.component')
.then(c => c.ContactComponent)

},
  { path: 'about',
     loadComponent:() => import('./about/about.component')
     .then(c => c.AboutComponent )

      },

  { path: 'users',
     loadComponent:() => import('./users/users.component')
     .then(c => c.UsersComponent )

      },
  
    { path: 'user/:id',
       loadComponent:() => import('./user/user.component')
       .then(c => c.UserComponent)

       },

];
