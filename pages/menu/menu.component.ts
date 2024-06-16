import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  cardlist:any
 
  isCartEmpty: boolean = true;
  constructor(private service:OrderDetailsService,private cartservice :CartService) { 
    this.cardlist=cartservice.getcardlist();

  }
 foodData:any;
  ngOnInit(): void {
    this.foodData = this.service.foodDetails; 
  }
  addtocart(fd:any){
    fd.isAdded=true;
      this.cartservice.addtoCart(fd);

  }
  removeCardItem(fd:any){
  
    this.cartservice.removeCardItem(fd);
  }
 
  getItemTotalAmount(foodPrice: number, quantity: number): number {
    return Number(foodPrice) * Number(quantity);
  }
removeItem(fd:any){
  fd.isAdded=false;
  
 this.cartservice.removeCItem(fd)
}
  
  emptycart() {
    
    this.foodData = this.service.foodDetails; 
    for (let food of this.foodData) {
      food.quantity=0;
     food.isAdded=false
  }
  
    this.cardlist=this.cartservice.clearcart()
   
   }
 


  
   



 
 









}

