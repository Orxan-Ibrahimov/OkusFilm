import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { SpecialSubstrPipe } from './pipes/special-substr.pipe';
import { MovieFilterPipe } from './pipes/movie-filter.pipe';
import { FormsModule } from '@angular/forms';
import { AlertifyService } from './services/alertify.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';
import { AppRoutingModule } from './app-routing.module';
import { MovieCreateComponent } from './movies/movie-create/movie-create.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    MoviesComponent,
    NavbarComponent,
    FooterComponent,
    MovieComponent,
    MovieDetailsComponent,
    SpecialSubstrPipe,
    MovieFilterPipe,
    MovieCreateComponent       
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
