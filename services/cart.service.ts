import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  [x: string]: any;
  public cartItemList: any = []

  constructor() { }
  getcardlist() {
    return this.cartItemList;
  }


  addtoCart(product: any) {
    product.quantity += 1;
    if(!this.cartItemList.some((p: { id: any; }) => p.id === product.id))
    {
     this.cartItemList.push(product);
     console.log(this.cartItemList)
    }
 
  }
  
  removeCardItem(product: any) {
    if(product.quantity>1){
    product.quantity -= 1;
    }
    
  }
  

  removeCItem(product:any){
     this.cartItemList.map((a: any, index: any) => {   /*The map() method in JavaScript creates an array by calling a specific function on each element present in the parent array.*/
      if (product.id === a.id) {
         this.cartItemList.splice(index, 1);       /*The splice() method returns an array by changing (adding/removing) its elements in place.*/
       }
     })
     this['productList'].next(this.cartItemList);
   }
   clearcart(){
   this.cartItemList =[]
   return this.cartItemList
   }
}


