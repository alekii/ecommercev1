import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ProductService } from './product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartService } from './ShoppinCart.Service';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
  ],
  providers: [ProductService,ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
