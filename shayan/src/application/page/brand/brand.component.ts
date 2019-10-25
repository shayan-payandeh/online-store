import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetBrandService } from 'src/application/shared/service/get-brand.service';
import { Cart } from 'src/application/shared/model/Cart';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
 data: Cart[];
  constructor(private route : ActivatedRoute,
              private getBrand : GetBrandService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.data =this.getBrand.getBrand(params.brandTitle);
    })
  }

}
