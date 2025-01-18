import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AbouteComponent } from './aboute/aboute.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditUsetComponent } from './edit-uset/edit-uset.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aboute', component: AbouteComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'user', component: UserComponent},
    { path: 'userList', component: UserListComponent },
    { path: 'EditUser', component: EditUsetComponent }



];
