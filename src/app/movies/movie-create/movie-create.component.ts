import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
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
  // model:any = {
  //   categoryId:-1
  // }
  constructor(private categoryService: CategoryService, private movieService: MovieService, private router: Router,
    private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
      console.log(data);
      
    });
  }

   movieForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    description: new FormControl("",[Validators.required]),
    image: new FormControl("",[Validators.required]),
    categoryId: new FormControl("",[Validators.required]),
  });

  Create() {  
   
    if (this.movieForm.value.name == null || this.movieForm.value.name == undefined) {
      this.alertify.error("Movie's name can't be empty");
      return;
    }
    else if(this.movieForm.value.name.length < 5){
      this.alertify.error("Movie's name can't be less than 5 characters");
      return;
    }
    if (this.movieForm.value.image == null ||this.movieForm.value.image == undefined) {
      this.alertify.error("Movie's image can't be empty");
      return;
    }

    const extensions = ["jpeg", "png", "jpg"];
    let extension = this.movieForm.value.image.split(".").pop();
    if (extensions.indexOf(extension) == -1) {
      this.alertify.error("Image format must be one of 'jpeg','png','jpg' formats");
      return;
    }

    if (this.movieForm.value.description == null || this.movieForm.value.description == undefined) {
      this.alertify.error("Movie's description can't be empty");
      return;
    }
    if (this.movieForm.value.categoryId == -1) {
      this.alertify.error("You must choose any category");
      return;
    }

   

    const movie = {
      id: 0,
      name: this.movieForm.value.name,
      description: this.movieForm.value.description,
      isPopular: false,
      imageUrl: this.movieForm.value.image,
      publishedDate: new Date().getDate(),
      categoryId : this.movieForm.value.categoryId
    };

    this.movieService.CreateMovie(movie).subscribe(data => {
      this.router.navigate(["movies/movie/" + data.id]);
    });

  }


}
