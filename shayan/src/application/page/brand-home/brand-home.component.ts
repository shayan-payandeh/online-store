import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/application/shared/service/brand.service';
import { Cart } from 'src/application/shared/model/Cart';

@Component({
  selector: 'app-brand-home',
  templateUrl: './brand-home.component.html',
  styleUrls: ['./brand-home.component.scss']
})
export class BrandHomeComponent implements OnInit {
  data : Cart [];
  constructor(private brandService : BrandService) { }
  
  ngOnInit() {
    this.data = this.brandService.getBrand();
   
  }

}
