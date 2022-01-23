import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
 @Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit { 
 @Output() scrollToEvent = new EventEmitter<void>();
  constructor( ) { }

  ngOnInit(): void {
     
  }

 gotoProducts(){  
   this.scrollToEvent.emit(); 
 }
}
