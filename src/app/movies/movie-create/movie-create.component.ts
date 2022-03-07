import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.scss'],
  providers:[CategoryService]
})
export class MovieCreateComponent implements OnInit {
categories:Category[] = [];
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data:Category[]) => {
      this.categories = data;
    });
  }

  Create(name:any,image:HTMLInputElement,desc:any,category:any){
console.log(`name = ${name.value} \n image = ${image.value} \n desc = ${desc.value} \n category = ${category.value}`);
console.log(image.title)
  }

}
