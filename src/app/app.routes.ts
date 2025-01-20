import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact',
loadComponent:() => import('./contact/contact.component')
.then(c => c.ContactComponent)

},
  { path: 'about',
     loadComponent:() => import('./about/about.component')
     .then(c => c.AboutComponent )

      }
];
