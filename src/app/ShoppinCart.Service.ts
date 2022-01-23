import { Subject } from "rxjs/internal/Subject";
import { Cart } from "./shared/cart.model";
import { Product } from "./shared/product.model";

export class ShoppingCartService{
     private cart: Cart [] = [];
     cartChanged = new Subject<Cart[]>(); 
     itemSubtotal = 0;
     itemsInCart = 0;

    getCartItems(){  
        return this.cart.slice();
       
    }
    addCartItems(id:number,product: Product, quantity:number){
        const price = product.price;
        const subtotal = price * quantity;  
      //   if(this.cart.length>0&&this.cart.[id].prodId === id){
      //       this.cart[id].quantity += quantity; 
     //        this.cart[id].subtotal += subtotal
     //   }
    
    //    else {
        let cartItems = new Cart(
            id,
            product.productName,
            product.imagePath,
            quantity,
            price,
            subtotal
        )  
        this.cart.push(cartItems);
        this.itemSubtotal+=subtotal; 
        this.itemsInCart += cartItems.quantity;
        this.cartChanged.next(this.cart.slice()); 
   //     }
        
       
    console.log(this.cart);
    }
    
  deleteCart(index:number) {  
      this.itemSubtotal -= this.cart[index].subtotal; 
      this.itemsInCart -= this.cart[index].quantity;
      this.cart.splice(index,1); 
      this.cartChanged.next(this.cart.slice()); 
        
  } 
   getcartTotal(){
     return this.itemSubtotal;
   }
   
  updateSubtotal(index: number,quant:number) {  
    const price = this.cart[index].price;
    const oldsubtotal =  this.cart[index].subtotal; 
    const newsubtotal = price * quant ; 
    const oldquant = this.cart[index].quantity; 
    const newquantity = (quant-oldquant);
    this.cart[index].subtotal = newsubtotal;
    this.cart[index].quantity = quant;
    this.itemSubtotal += (newsubtotal-oldsubtotal); 
    this.itemsInCart += newquantity;
    this.cartChanged.next(this.cart.slice());  

  }
  getNoItems(){
    return this.itemsInCart;
  }
}