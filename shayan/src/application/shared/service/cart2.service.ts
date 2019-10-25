import { Injectable } from '@angular/core';
import { Cart } from '../model/Cart';
import { MockCart } from '../mock/mockCart';

@Injectable({
  providedIn: 'root'
})
export class Cart2Service {
  data :Cart [] = MockCart;
  
  constructor() { }

  public getByCategory(category : string){
    let result : Cart [] =[]; 
    this.data.forEach(element => {
      if(element.Category == category){
        result.push(element)
      }
    });
    return result
  }
}
