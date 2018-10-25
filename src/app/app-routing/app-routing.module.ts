import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from '../ui/movie-list/movie-list.component';
import { MovieDetailsComponent } from '../ui/movie-details/movie-details.component';
import { MovieSearchComponent } from '../ui/movie-search/movie-search.component';
import { HomeComponent } from '../ui/components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movie-details', component: MovieDetailsComponent },
  { path: 'movie-search', component: MovieSearchComponent },
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
