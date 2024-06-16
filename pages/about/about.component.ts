import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  cardlist:any
  constructor(private service:OrderDetailsService,private cartservice :CartService) {
     this.cardlist=cartservice.getcardlist(); }

     foodData:any;
     ngOnInit(): void {
       this.foodData = this.service.foodDetails; 
     }
     addtocart(fd:any){
         this.cartservice.addtoCart(fd);
     }
     removeCardItem(fd:any){
       this.cartservice.removeCardItem(fd);
     }
     getItemTotalAmount(foodPrice: number, quantity: number): number {
      return Number(foodPrice) * Number(quantity);
    }

}
