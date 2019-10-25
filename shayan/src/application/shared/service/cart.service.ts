import { Injectable } from '@angular/core';
import { MockCart } from '../mock/mockCart';
import { Cart } from '../model/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 data :Cart [] = MockCart;
 
  constructor() { }
  public getById(id :number){
    let result
    this.data.forEach(element => {
      if(element.Id == id){
        result = element
      }
    });
    return result;
  }
}
