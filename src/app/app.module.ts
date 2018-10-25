import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

// import { AppRoutingModule } from '../../app-routing.module';


import { AppComponent } from './app.component';
import { MovieSearchComponent } from './ui/movie-search/movie-search.component';
import { MovieListComponent } from './ui/movie-list/movie-list.component';
import { MovieDetailsComponent } from './ui/movie-details/movie-details.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './ui/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    MovieListComponent,
    MovieDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
