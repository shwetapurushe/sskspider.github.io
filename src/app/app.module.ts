import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { NavbarModule } from './navbar/navbar.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { PublicationsModule } from './publications/publications.module';
import { ProjectsModule } from './projects/projects.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PublicationsComponent } from './publications/publications.component';
import { ProjectsComponent } from './projects/projects.component';
import { CardsComponent } from './cards/cards.component';


export const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'publications', component: PublicationsComponent},
  { path: 'projects', component: ProjectsComponent}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(ROUTES),
            NavbarModule,
            HomeModule, AboutModule, PublicationsModule, ProjectsModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
