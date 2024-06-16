import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators,FormBuilder}from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;
  user:any={};
  constructor(private http : HttpClient,private router:Router, private fb: FormBuilder){}

  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  ngOnInit() {
  this.loginForm = this.fb.group({ 
    email: new FormControl('', [Validators.pattern(this.emailRegEx), Validators.required, Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(5)]),

  })
}
  get loginFormControl() {
    return this.loginForm.controls;
  }

  loginUser(){
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{
     const user =res.find((a:any)=>{
       return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
     });
     if(user){
      localStorage.setItem('Users',JSON.stringify(user));
       alert("login Success!!");
        this.router.navigate(['admin']);


     }else{
       alert("user not found ,please Register");
     }
    },err=>{
       
      alert("something went wrong!!")
    })


    
    this.submitted = true;
    if (this.loginForm.valid) {

      console.log(this.loginForm.value);
      this.user=Object.assign(this.user,this.loginForm.value);
      
      
    }
    
  }
 
  autosignin(){
    
    const user:any =  localStorage.getItem('Users');
    console.log(JSON.parse(user));
    if(!user){
      return
    }
  }  


}
