import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
  providers: [CategoryService]
})
export class CreateCategoryComponent implements OnInit {

  constructor(private alertify: AlertifyService, private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
  }


  movieCategory = new FormGroup({
    category: new FormControl()
  })

  get category() {
    return this.movieCategory.get("category");
  }

  CreateCategory() {

    if (this.category.value == null || this.category.value == undefined || this.category.value == "") {
      this.alertify.error("category can't be empty");
      return 0;
    }

    const newCategory: Category = {
      id:"",
      category: this.movieCategory.value.category
    };

    return this.categoryService.CreateCategory(newCategory).subscribe(data => this.router.navigate(["movies"]));
  }

}
