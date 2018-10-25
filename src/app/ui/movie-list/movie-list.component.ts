import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any;
  private imageUrl = 'assets/images/edu-logo.svg';

  constructor(private dataService: HttpClient) { }

  ngOnInit() {
    this.dataService.get('./assets/movies.json').subscribe((response) => {
      this.movies = response;
      console.log(this.movies, 'movies response');
    });
  }

}
