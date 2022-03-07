import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  selectedCategory: Category = null;
  displayAll:boolean = true;
  constructor(private category: CategoryService) {
  }

  ngOnInit(): void { 

    this.category.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    });
    
  }

  

  SelectCategory(element?: Category) {

    if (element) {
      this.selectedCategory = element;
      this.displayAll = false
    }
    else {
      this.selectedCategory = null;
      this.displayAll = true
    }
  }
}
