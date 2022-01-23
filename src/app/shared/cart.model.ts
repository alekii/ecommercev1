export class Cart{
    public prodId:number;
    public name:string;
    public imagePath: string; 
    public quantity: number;
    public price: number; 
    public subtotal:number;

    constructor(prodId:number,name:string, imagePath:string,quantity:number,price:number,subtotal:number){
        this.prodId = prodId;
        this.name = name;
        this.imagePath = imagePath; 
        this.quantity = quantity;
        this.price = price;
        this.subtotal = subtotal
    }
}