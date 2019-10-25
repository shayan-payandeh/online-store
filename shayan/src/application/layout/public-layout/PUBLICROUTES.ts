import { HomeComponent } from 'src/application/page/home/home.component';
import { ListComponent } from 'src/application/page/list/list.component';
import { CategoryComponent } from 'src/application/page/category/category.component';
import { CategoryHomeComponent } from 'src/application/page/category-home/category-home.component';
import { BrandHomeComponent } from 'src/application/page/brand-home/brand-home.component';
import { BrandComponent } from 'src/application/page/brand/brand.component';
import { ContactComponent } from 'src/application/page/contact/contact.component';
import { NotFoundComponent } from 'src/application/shared/not-found/not-found.component';


export const PUBLICROUTES = [
    { path : '' , component : HomeComponent},
    { path : 'home' , component : HomeComponent},
    { path : 'list/:id' , component : ListComponent},
    { path : 'category/:categoryName' , component : CategoryComponent},
    { path : 'categoryhome/category/:categoryName' , component : CategoryComponent},
    { path : 'categoryhome' , component : CategoryHomeComponent},
    { path : 'brandhome' , component : BrandHomeComponent},
    { path : 'brand/:brandTitle' , component: BrandComponent},
    { path : 'brandhome/brand/:brandTitle' , component: BrandComponent},
    { path : 'contact' , component : ContactComponent},
    // { path : '**', component :NotFoundComponent }

]