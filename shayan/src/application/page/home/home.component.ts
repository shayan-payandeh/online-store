import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/application/shared/model/Cart';
import { MockCart } from 'src/application/shared/mock/mockCart';
import { BrandService } from 'src/application/shared/service/brand.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data : Cart[];
  filteredData :Cart [] = [];
  constructor(private getBrand :BrandService) { }
  
  ngOnInit() {
    this.data = MockCart;
    this.filteredData= this.getBrand.getBrand()
  }

}
