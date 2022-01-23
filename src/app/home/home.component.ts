import { ProviderAst } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, NgModule, OnInit, Output, ViewChild } from '@angular/core'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],  
})
 
export class HomeComponent implements OnInit { 
  plist :ElementRef;
  constructor() { }

  ngOnInit(): void {
    
  }
  scrollTo(event:any){  
   this.plist.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
 
  }

   
}
