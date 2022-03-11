import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/category';
import { Movies } from '../models/movıes';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers:[MovieService]
})
export class MoviesComponent implements OnInit {

  title:string = "Movie List"
  movies:Movies[] = [];
  filteredText:string = "";
  loading:boolean = true;
  
  constructor(private alert:AlertifyService,private movieService:MovieService,private activatedRoute:ActivatedRoute) 
  {     
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      
      this.movieService.getMovies(params["categoryId"]).subscribe((data:Movies[]) => { 
        this.movies = data;
        this.loading = false;       
        
      }, error => {
       console.log(error);
        this.loading = false;
      });     
     
    });   
    
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

 

  
}
