import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from './shared.service'; 


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 
  
  cardlist:any
  adminForm!: FormGroup;
  updateForm!: FormGroup
  submitted = false;
  editproduct:any;
  isCartEmpty: boolean = true;
  foodlist: any;
  users: any;
  user:any
  use:any
  
 
  constructor(private service:OrderDetailsService,private http:HttpClient, private fb: FormBuilder,private router:Router,private shared :SharedService) { 
    this.foodlist=service.getFoodlist()
   // user:signupUsers[]=[]
 }
  foodData:any;
  ngOnInit(): void {
    this.foodData = this.service.foodDetails; 

    this.adminForm = this.fb.group({ 
      foodImg:new FormControl('',[Validators.required]),
      foodName: new FormControl('',[Validators.required]),
      foodPrice : new FormControl('',[Validators.required]),
  
    })

    this.updateForm = this.fb.group({
      id:new FormControl('',[Validators.required]),
      foodImg:new FormControl('',[Validators.required]),
      foodName: new FormControl('',[Validators.required]),
      foodPrice: new FormControl('',[Validators.required]),
  
    })
  

//register form
    this.shared.getsignupUsers().subscribe
    (
      (response)=>
      {
        this.users= response;
      },(error)=>
      {
        console.log("Error Occured : "+error);
      })

     

//contactus form
      this.shared.getContactUs().subscribe
      (
        (response)=>
        {
          this.user=response;
        },(err)=>
        {
          console.log("error occured :" +err)
        }
      )

//feedback form
      this.shared.getfeedback().subscribe
      (
        (response)=>
        {
          this.use=response;
        },(err)=>
        {
          console.log("error occured :" +err)
        }
      )
  

     
  }
  get adminFormControl() {
    return this.adminForm.controls;
  }
  get updateFormControl() {
    return this.updateForm.controls;
    
  
  }

  adminUser(){
    this.submitted = true;
    if (this.adminForm.valid) {
     console.log(this.adminForm.value);
     const  newfood=Object.assign({},this.adminForm.value);
      newfood.id=this.foodlist.length+1
      newfood.quantity=0
      newfood.foodDetails="",
      newfood.isAdded=false,
      newfood.notAvailable=false,
      newfood.able=true

      this.foodlist.push(newfood)
      this.service.setFoodlist(this.foodlist)
      this.foodData = this.service.foodDetails; 

      let ref = document.getElementById('cancel')
        ref?.click();
        this.adminForm.reset();
     
    }
   
  }
  //edit data
  edit(fd:any){
    this.updateForm.controls['id'].setValue(fd.id);
    this.updateForm.controls['foodPrice'].setValue(fd.foodPrice);
    this.updateForm.controls['foodName'].setValue(fd.foodName);
    this.updateForm.controls['foodImg'].setValue(fd.foodImg);
   
   // let ref = document.getElementById('cancel')
     //  ref?.click();
     // this.adminForm.reset(); 
     
  }
  //update changes
  updateproduct(editproduct:any){
    this.foodlist.map((_food: any)=>{
      if(_food.id===editproduct.value.id){
        _food.foodImg=editproduct.value.foodImg;
        _food.foodName=editproduct.value.foodName;
        _food.foodPrice=editproduct.value.foodPrice;
        //return _food
        
      }
     // return _food
     
    })


    
    this.service.setFoodlist(this.foodlist)
    this.foodData = this.service.foodDetails;

   
    
  }

 
 
 


}
