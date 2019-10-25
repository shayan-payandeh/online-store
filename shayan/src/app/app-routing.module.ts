import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutComponent } from 'src/application/layout/public-layout/public-layout.component';
import { PUBLICROUTES } from 'src/application/layout/public-layout/PUBLICROUTES';

const routes: Routes = [
 { path:'' , component:PublicLayoutComponent , children: PUBLICROUTES}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
