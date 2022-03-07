import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movies/movie/movie.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieCreateComponent } from './movies/movie-create/movie-create.component';

const routes: Routes = [
  { path: "movies", component: MoviesComponent },
  { path: "", redirectTo: "movies",pathMatch:"full"},
  { path: "movies/category/:categoryId", component: MoviesComponent },
  { path: "movies/movie/:id", component: MovieDetailsComponent },
  { path: "movies/movie-create", component: MovieCreateComponent }
]

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})
export class AppRoutingModule { }
