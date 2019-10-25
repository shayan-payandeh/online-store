import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart2Service } from 'src/application/shared/service/cart2.service';
import { Cart } from 'src/application/shared/model/Cart';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
data : Cart[]
  constructor(private route : ActivatedRoute,
              private cart2Service : Cart2Service
              ) { }

  ngOnInit() {
  this.route.params.subscribe(param =>{
    this.data = this.cart2Service.getByCategory(param.categoryName)
  })    
  
  }

}
