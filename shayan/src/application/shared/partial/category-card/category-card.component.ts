import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../../model/Cart';
import { MockCart } from '../../mock/mockCart';


@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {
 @Input() data ;
  constructor() { }

  ngOnInit() {
   
  }

}
