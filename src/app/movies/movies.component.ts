import { Component, OnInit } from '@angular/core';
import { MovieRepository } from '../models/movieRepository';
import { Movies } from '../models/movıes';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  title:string = "Movie List"
  movies:Movies[];
  popularMovies:Movies[];
  movieRepository:MovieRepository;
  filteredText:string = "";

  constructor(private alert:AlertifyService) { 
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getAllMovies();
    this.popularMovies = this.movieRepository.getPopularMovies();
  }

  AddMovie($event:any,movie:Movies){
    if($event.target.classList.contains('btn-primary')){
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');
      $event.target.innerHTML = "Remove";
      this.alert.success(`${movie.name} Added`);
    }
    else{
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');
      $event.target.innerHTML = "Add";
      this.alert.error(`${movie.name} Removed`);

    }
  }

  ngOnInit(): void {
  }

}
