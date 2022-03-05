import { Component, OnInit } from '@angular/core';
import { MovieRepository } from '../models/movieRepository';
import { Movies } from '../models/movıes';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies:Movies[];
  movieRepository:MovieRepository;

  constructor() { 
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getAllMovies();
  }



  ngOnInit(): void {
  }

}
