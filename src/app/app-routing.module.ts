import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movies/movie/movie.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieCreateComponent } from './movies/movie-create/movie-create.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "movies", component: MoviesComponent , canActivate:[AuthGuard]},
  { path: "", redirectTo: "movies",pathMatch:"full"},
  { path: "movies/category/:categoryId", component: MoviesComponent ,canActivate:[AuthGuard]},
  { path: "movies/movie/:id", component: MovieDetailsComponent,canActivate:[AuthGuard] },
  { path: "movies/movie-create", component: MovieCreateComponent ,canActivate:[AuthGuard]},
  { path: "category/create-category", component: CreateCategoryComponent,canActivate:[AuthGuard] },
  { path: "auth", component: AuthComponent }
]

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})
export class AppRoutingModule { }
