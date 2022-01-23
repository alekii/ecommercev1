import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [ 
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path: 'cart', component:CartComponent}, 
  {path: 'home',component:HomeComponent}, 
  {path: 'product/:id',component:ProductDetailComponent},  
  { path: '**', component: HomeComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
