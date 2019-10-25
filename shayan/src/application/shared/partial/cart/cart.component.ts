import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../../model/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() data : Cart;
  constructor() { }

  ngOnInit() {
  }

}
