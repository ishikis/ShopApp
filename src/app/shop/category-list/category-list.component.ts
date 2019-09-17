import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repository';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public selectedCategory: Category = null;
  //geriye parametre gönderme işlemi için 
  @Output() category = new EventEmitter<Category>();
  constructor(private categoryRepository: CategoryRepository) { }


  ngOnInit() {
  }

  get categories(): Category[] {
    return this.categoryRepository.getCategories()
  }

  changeCategory(newCategory?: Category) {
    this.selectedCategory = newCategory;

    //geriye parametre gönderme işlemi için 
    this.category.emit(newCategory);
  }



}
