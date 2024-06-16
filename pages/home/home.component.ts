import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
   
})
export class HomeComponent implements OnInit {

  
 
  constructor(private service:OrderDetailsService ) { }
 foodData:any
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

  select = [
    {
      id:1,
      Name:"Select Food",
    },
    {
      id:2,
      Name:"Fill The Details"
    },
    {
      id:3,
      Name:"Your Order Delivered In Minute"
    }

  ]


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag:true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [' <i class="bi bi-caret-left-fill"></i> ', ' <i class="bi bi-caret-right-fill"></i> '],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 4
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav:true
  }
  
  
  }
