import { Component, OnDestroy, OnInit } from '@angular/core'; 
import { Subscription } from 'rxjs';
import { Cart } from '../shared/cart.model';
import { ShoppingCartService } from '../ShoppinCart.Service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  itemsInCart:number;
  subscription : Subscription
  constructor(private shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
    this.itemsInCart = this.shoppingCart.getNoItems();
    this.subscription = this.shoppingCart.cartChanged
    .subscribe(
      (cart:Cart[])=>{ 
    this.itemsInCart = this.shoppingCart.getNoItems();
      });
  }
  ngOnDestroy(): void { 
    this.subscription.unsubscribe();
  }


}
