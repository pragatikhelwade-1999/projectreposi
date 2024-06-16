import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  
  constructor(private http:HttpClient) { }

  //food Details

 public foodDetails = [
    {
      id:1,
      quantity:0,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried masala paneer.",
      foodPrice:200,
      foodImg:"https://cdn.cdnparenting.com/articles/2020/02/27142441/GRILLED-PANEER-SANDWICH-RECIPE.jpg",
       isAdded:false,
       notAvailable:false,
       able:true
    },
    {
      id:2,
      quantity:0,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo ice cream",
      foodPrice:219,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6",
      isAdded:false,
      notAvailable:false,
      able:true
    },
    {
      id:3,
      quantity:0,
      foodName:"Paneer Burger",
      foodDetails:"panner",
      foodPrice:149,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k",
      isAdded:false,
      notAvailable:false,
      able:true
     
    },
    {
      id:4,
      quantity:0,
      foodName:"Veg Masala Roll In Naan",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice:140,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7",
      isAdded:false,
      notAvailable:false,
      able:true
    },
    {
      id:5,
      quantity:0,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodPrice:105,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv",
      isAdded:false,
      notAvailable:false,
      able:true
    },
   {
      id:6,
      quantity:0,
      foodName:"Veggie Supreme",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice:369,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k",
      isAdded:false,
      notAvailable:false,
      able:true
    },
    {
      id:7,
      quantity:0,
      foodName:"cheese burger",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice:350,
      foodImg:"https://fastly.4sqi.net/img/general/600x600/3657765_O4K15i0FZJPqywBgROfy_uI0UlMPzWAdfVULqS_nJBE.jpg",
      isAdded:false,
      notAvailable:false,
      able:true
    },
    {
      id:8,
      quantity:0,
      foodName:"Indian food",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices.With Rice",
      foodPrice:500,
      foodImg:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/77e25274133329.5c238353cfe8c.jpg",
      isAdded:false,
      notAvailable:false,
      able:true
    }
   

  ]

setFoodlist(foodlist:any){
   this.foodDetails=foodlist
   console.log(this.foodDetails)
}
public getFoodlist(){

  return this.foodDetails
}

  

}



