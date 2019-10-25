import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ListComponent } from './page/list/list.component';
import { CategoryComponent } from './page/category/category.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { FooterComponent } from './layout/public-layout/partial/footer/footer.component';
import { NavigationComponent } from './layout/public-layout/partial/navigation/navigation.component';
import { HeaderComponent } from './layout/public-layout/partial/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './shared/partial/cart/cart.component';
import { CategoryHomeComponent } from './page/category-home/category-home.component';
import { CategoryCardComponent } from './shared/partial/category-card/category-card.component';
import { BrandCardComponent } from './shared/partial/brand-card/brand-card.component';
import { BrandHomeComponent } from './page/brand-home/brand-home.component';
import { BrandComponent } from './page/brand/brand.component';
import { ContactComponent } from './page/contact/contact.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { BrandReviewComponent } from './main-page-component/brand-review/brand-review.component';
import { GallerySliderComponent } from './main-page-component/gallery-slider/gallery-slider.component';

@NgModule({
    declarations: [ 
  HomeComponent,  
  ListComponent, 
  CategoryComponent, 
  PublicLayoutComponent, 
  FooterComponent, 
  NavigationComponent, 
  HeaderComponent, 
  CartComponent, 
  CategoryHomeComponent, 
  CategoryCardComponent, 
  BrandCardComponent, 
  BrandHomeComponent, 
  BrandComponent, 
  ContactComponent, 
  NotFoundComponent, 
  BrandReviewComponent, GallerySliderComponent
],
    imports: [
      CommonModule,
      RouterModule,
      HttpClientModule,
      FormsModule
  
    ],
    exports: [
   
    ]
  })
  export class ApplicationModule { }
  