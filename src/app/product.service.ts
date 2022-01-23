import { Product } from "./shared/product.model";

export class ProductService{
    
    private products : Product [] = [
        new Product(
            'Nike Airfoce 1',
           'https://807garage.com/wp-content/uploads/2020/12/6D2975E0-70BF-4D8F-8FAA-4C2A35B09718-897x897.jpeg',
            3500
            ),
        new Product(
            'Air Jordan',
            'https://th.bing.com/th/id/OIP.MWzdqie0x1KA-RWt2U-7QQHaHa?pid=ImgDet&w=1080&h=1080&rs=1',
            4500
        ),
        new Product(
            'Nike Airfoce 1',
            'https://th.bing.com/th/id/OIP.6D-h6OcxqhpI1cAmeMOewwHaHa?pid=ImgDet&w=640&h=640&rs=1',
            2500
        )
    ];

    
    getProducts() { 
        return this.products.slice();
    }

    getProduct(index: number){
       return this.products[index];
    }

}