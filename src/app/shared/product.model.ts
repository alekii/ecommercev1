export class Product{
     public productName:string;
     public imagePath:string;
     public price:number;
     
    constructor(name:string,imagPath:string,price:number){
       this.productName = name;
       this.imagePath = imagPath;
       this.price = price;
    }
}