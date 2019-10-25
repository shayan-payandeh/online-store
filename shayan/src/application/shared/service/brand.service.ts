import { Injectable } from '@angular/core';
import { Cart } from '../model/Cart';
import { MockCart } from '../mock/mockCart'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  data : Cart[] = MockCart;
  constructor() { }

  public getBrand(){
    let cn;
    let result = [];
    this.data.forEach(element => {
      if(element.BrandTitle != cn){
        result.push(element);
        cn = element.BrandTitle;
      }
    });
    return result;
  }
}
