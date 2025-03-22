import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AbouteComponent } from './aboute/aboute.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'aboute' },
    { path: 'home', component:HomeComponent },
    { path: 'home/:id/:name', component:HomeComponent },
    { path: 'aboute', component: AbouteComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: PageNotFoundComponent },

];
