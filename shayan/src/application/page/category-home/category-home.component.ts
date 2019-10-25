import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/application/shared/service/category.service';
import { Cart } from 'src/application/shared/model/Cart';
import { MockCart } from 'src/application/shared/mock/mockCart';

@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.scss']
})
export class CategoryHomeComponent implements OnInit {
  data : Cart[] =[];
  
  constructor(private categoryService : CategoryService) { }
 
  ngOnInit() {
    this.data = this.categoryService.getDistinctCategory();
  }

}
