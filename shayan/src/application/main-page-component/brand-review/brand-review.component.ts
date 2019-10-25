import { Component, OnInit, Input } from '@angular/core';
import { Cart } from 'src/application/shared/model/Cart';
import { MockCart } from 'src/application/shared/mock/mockCart';

@Component({
  selector: 'app-brand-review',
  templateUrl: './brand-review.component.html',
  styleUrls: ['./brand-review.component.scss']
})
export class BrandReviewComponent implements OnInit {
@Input() data;
  constructor() { }

  ngOnInit() {
    
  }

}
