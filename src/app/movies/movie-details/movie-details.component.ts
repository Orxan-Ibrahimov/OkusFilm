import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movies } from 'src/app/models/movıes';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  providers:[MovieService]
})
export class MovieDetailsComponent implements OnInit {

  movie:any;
  loading:boolean = true;
  constructor(private movieService:MovieService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.movieService.getMovieById(params["id"]).subscribe((data:Movies)=>{
        this.movie = data;
        this.loading = false;
      });
    });
  }

}
