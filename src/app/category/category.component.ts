import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/categoryRepository';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  constructor(private category: CategoryService) {
  }

  ngOnInit(): void {
    this.category.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    });
  }
}
