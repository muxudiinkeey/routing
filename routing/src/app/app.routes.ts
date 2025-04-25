import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AbouteComponent } from './aboute/aboute.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoursesComponent } from './courses/courses.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component:HomeComponent },
    { path: 'aboute', component: AbouteComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'courses', component: CoursesComponent },
    { path: '**', component: PageNotFoundComponent },

];
