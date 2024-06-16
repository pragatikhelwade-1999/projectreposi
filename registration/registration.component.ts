import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  signupForm!: FormGroup;
  submitted = false;
  a: any;
  // user:any={};

  constructor(
    private fb: FormBuilder, private http: HttpClient, private router: Router

   ) {}  //this.autosignin()
  res: any
  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  ngOnInit() {
    this.signupForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      dtofbth: new FormControl('', [Validators.required]),
     mobile: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.pattern(this.emailRegEx), Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
  });
  }
  get signupFormControl() {
    return this.signupForm.controls;
  }
  signupUser() {
   
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{
      let isuserexist=false
          const user = res.find((a: any) => {
             if (a.email === this.signupForm.value.email) {
               isuserexist=true
                alert("Already Exists!!")

              }
          
          })
          if(!isuserexist){
            this.http.post<any>("http://localhost:3000/signupUsers", this.signupForm.value)
            .subscribe(res=> {
              
              alert("register success!!");
              this.signupForm.reset();
              this.router.navigate(['login']);
              
             
             }, err => {
              alert("Something went wrong")
            })
            isuserexist=false
          }
         });
       
        

    this.submitted = true;
    if (this.signupForm.valid) {

      console.log(this.signupForm.value);
      // this.user=Object.assign(this.user,this.signupForm.value);
      // localStorage.setItem('Users',JSON.stringify(this.user));
      // this.addUser(this.user)
    }
      }

    // autosignin(){
    //   const user:any =  localStorage.getItem('Users');
    //   console.log(JSON.parse(user));
    //   if(!user){
    //     return
    //   }
    // }  

    // addUser(user: any){
    //   let users: any[] = [];
    //   if(localStorage.getItem('Users')){
    //    user = localStorage.getItem('Users')
    //            console.log(JSON.parse(user))
    //     users = [user, ...users];
    //   }else{
    //     users = [user];
    //   }
    //   localStorage.setItem('Users',JSON.stringify(user));
    // }

      onKeyDown(e:any){
        console.log(e)
        if((e.code === "Minus" && "-")||(e.code === "Digit1")||(e.code === "Digit2")||(e.code === "Digit3")||(e.code === "Digit4")||(e.code === "Digit5")||(e.code === "Digit6")||(e.code === "Digit7")||(e.code === "Digit8")||(e.code === "Digit9")||(e.code === "Digit0")||(e.code === "Period")||(e.code === "Comma")||(e.code === "Quote")||(e.code === "Semicolon")||(e.code === "Slash"))
        e.preventDefault();
      }

      keydown(eve:any){
        console.log(eve)
        if((eve.code === "Minus" && "-")||(eve.code === "KeyE")||(eve.code === "Period")||(eve.code === "Comma")||(eve.code === "Quote")||(eve.code === "Semicolon")||(eve.code === "Slash"))
        eve.preventDefault();
      }
  }


  
  

 