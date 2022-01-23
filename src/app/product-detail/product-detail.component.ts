import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule, Validators} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../product.service';
 import { Product } from '../shared/product.model';
import { ShoppingCartService } from '../ShoppinCart.Service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id:number;
  product:Product;
  cartForm:FormGroup;
  quantity:number;
  loadStatus : string;
  isVisible = false;

  constructor(private router: Router,
              private route:ActivatedRoute,
              private productService: ProductService,
              private shoppingCart : ShoppingCartService) { }

  ngOnInit(): void { 
      this.route.params
      .subscribe(
        (params: Params)=>{
           this.id = +params['id'];
           this.product = this.productService.getProduct(this.id);
         }
      );
      this.cartForm = new FormGroup({
        'quantity' : new FormControl(null,[Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
    });
      this.cartForm.setValue({
        quantity:1
      });
  }
  
  increaseQuantity(){
    let quantity = Math.abs(this.cartForm.value['quantity'])
    let newQuantity = quantity + 1;
    this.cartForm.setValue({
      quantity:newQuantity
    });
  }

  decreaseQuantity(){
    let quantity = this.cartForm.value['quantity']
       if(quantity<=1){
      
  } else{
    let newQuantity = quantity - 1;
    this.cartForm.setValue({
    quantity:newQuantity
});
  }
  }

  onSubmit(){
   const quantity = Math.abs(this.cartForm.value['quantity']);
   const amount =  this.product.price * quantity;
    //this.router.navigate(['../../cart'],{relativeTo:this.route});
    this.isVisible= true;
   this.loadStatus = "Adding to cart....";
   setTimeout(
     () =>{
      this.shoppingCart.addCartItems(this.id,this.product,quantity);
      this.loadStatus = "Added To Cart Successfully. "
      this,this.isVisible = false;
     },500) 
  }
   
}
