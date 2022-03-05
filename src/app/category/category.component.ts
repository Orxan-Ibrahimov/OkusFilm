import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/categoryRepository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories:Category[];
  categoryRepo:CategoryRepository;
  constructor() {
    this.categoryRepo = new CategoryRepository();
    this.categories = this.categoryRepo.getAllCategories();
   }

  ngOnInit(): void {
  }

}
