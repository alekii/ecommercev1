import { Component, ElementRef, OnInit, ViewChild,AfterViewInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,AfterViewInit {
   products : Product[];
   @ViewChild('plist') plist : ElementRef; 
   @Output() pList = new EventEmitter<ElementRef>(); 
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products=this.productService.getProducts(); 
    
  }
  ngAfterViewInit(){
   this.pList.emit(this.plist);
}
   


}
