import { Injectable } from '@angular/core';
import { Cart } from '../model/Cart';
import { MockCart } from '../mock/mockCart';

@Injectable({
  providedIn: 'root'
})
export class GetBrandService {
  data : Cart [];
  constructor() { }

  public getBrand(brandTitle : string){
    this.data = MockCart;
    let result =[];
    this.data.forEach(item => {
      if(item.BrandTitle == brandTitle){
        result.push(item);
      }
    });
    return result;
  }
}
