import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Movies } from 'src/app/models/movıes';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.scss'],
  providers: [CategoryService, MovieService]
})
export class MovieCreateComponent implements OnInit {
  categories: Category[] = [];
  model:any = {
    categoryId:-1
  }
  constructor(private categoryService: CategoryService, private movieService: MovieService, private router: Router,
    private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
      console.log(data);
      
    });
  }

  Create() {
    console.log(this.model);
    console.log(this.model.categoryId);
    

    if (this.model.name == null || this.model.name == undefined) {
      this.alertify.error("Movie's name can't be empty");
      return;
    }
    else if(this.model.name.length < 5){
      this.alertify.error("Movie's name can't be less than 5 characters");
      return;
    }
    if (this.model.image == null || this.model.image == undefined) {
      this.alertify.error("Movie's image can't be empty");
      return;
    }

    const extensions = ["jpeg", "png", "jpg"];
    let extension = this.model.image.split(".").pop();
    if (extensions.indexOf(extension) == -1) {
      this.alertify.error("Image format must be one of 'jpeg','png','jpg' formats");
      return;
    }

    if (this.model.description == null || this.model.description == undefined) {
      this.alertify.error("Movie's description can't be empty");
      return;
    }
    if (this.model.categoryId == -1) {
      this.alertify.error("You must choose any category");
      return;
    }

   

    const movie = {
      id: 0,
      name: this.model.name,
      description: this.model.description,
      isPopular: false,
      imageUrl: this.model.image,
      publishedDate: new Date().getDate(),
      categoryId : this.model.categoryId
    };

    this.movieService.CreateMovie(movie).subscribe(data => {
      this.router.navigate(["movies/movie/" + data.id]);
    });

  }


}
