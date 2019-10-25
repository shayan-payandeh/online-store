import { Injectable } from '@angular/core';
import { Cart } from '../model/Cart';
import { MockCart} from '../mock/mockCart'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 data : Cart[] = MockCart;
 
 cn;
  constructor() { }
  
  public getDistinctCategory(){
    let result =[] ;
    this.data.forEach(element => {
      if(element.Category != this.cn){
        result.push(element);
        this.cn = element.Category 
      }
    });
    return result;
  }
  
}
