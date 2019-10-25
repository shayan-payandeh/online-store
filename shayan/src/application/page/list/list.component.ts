import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/application/shared/service/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/application/shared/model/Cart';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
data :Cart;
  constructor( private route : ActivatedRoute,
               private cartService : CartService) { }

  ngOnInit() {
   
    this.route.params.subscribe(param =>{
      
     this.data = this.cartService.getById(param.id);
     
    })
   
  }

}
