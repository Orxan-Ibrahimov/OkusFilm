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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertifyService } from './services/alertify.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MovieService } from './services/movie.service';
import { AppRoutingModule } from './app-routing.module';
import { MovieCreateComponent } from './movies/movie-create/movie-create.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptor } from './services/auth.interceptor';

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
    MovieCreateComponent,
    CreateCategoryComponent,
    AuthComponent       
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AlertifyService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true},
  ],
  bootstrap: [AppComponent],  
})
export class AppModule { }
