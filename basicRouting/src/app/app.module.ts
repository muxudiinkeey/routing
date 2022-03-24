import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AbouteComponent } from './aboute/aboute.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// samee Routes xarafka hoe kabital xusuuso
const route: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'aboute', component: AbouteComponent},
  {path: 'contact', component: ContactComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AbouteComponent,
    ContactComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route) //route waa in aan ku qoraa halkan

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
