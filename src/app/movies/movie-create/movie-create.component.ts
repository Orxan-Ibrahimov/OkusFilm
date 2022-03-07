import { Component, OnInit } from '@angular/core';
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
  constructor(private categoryService: CategoryService, private movieService: MovieService, private router: Router,
    private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    });
  }

  Create(name: any, image: any, desc: any, category: any) {

    if (name.value == "") {
      this.alertify.error("Movie's name can't be empty");
      return;
    }
    if (image.value == "") {
      this.alertify.error("Movie's image can't be empty");
      return;
    }
    if (desc.value == "") {
      this.alertify.error("Movie's description can't be empty");
      return;
    }
    if (category.value == -1) {
      this.alertify.error("You must choose any category");
      return;
    }

    const extensions = ["jpeg", "png", "jpg"];
    let extension = image.value.split(".").pop();
    if (extensions.indexOf(extension) == -1) {
      this.alertify.error("Image format must be one of 'jpeg','png','jpg' formats");
      return;
    }

    const movie = {
      id: 0,
      name: name.value,
      description: desc.value,
      isPopular: false,
      imageUrl: image.value,
      publishedDate: new Date().getDate()
    };

    this.movieService.CreateMovie(movie).subscribe(data => {
      this.router.navigate(["movies/movie/" + data.id]);
    });

  }

}
