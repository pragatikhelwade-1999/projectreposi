import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators,FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm!:FormGroup;
    submitted = false;

  constructor(
    private fb: FormBuilder, private http: HttpClient, private router: Router
    
  ) { }

  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  ngOnInit() {
    this.contactForm=this.fb.group({
      name:new FormControl('',[Validators.required, Validators.minLength(3)]),
      email:new FormControl('',[Validators.required,Validators.email,Validators.pattern(this.emailRegEx)]),
      subject:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required])
  });
}
  get contactFormControl() {
    return this.contactForm.controls;
  }

  Contact() {
    this.http.post<any>("http://localhost:3000/ContactUs", this.contactForm.value)
            .subscribe(res=> {
               alert("your Responce Submited Successfully!!");
             this.contactForm.reset();
             this.router.navigate(['contact']);
            },err=>{
              alert("Something went wrong")
            })
          
    this.submitted = true;
    if (this.contactForm.valid) {
    
      console.log(this.contactForm.value);
    }
}
  
  onKeyDown(e:any){
    console.log(e)
    if((e.code === "Minus" && "-")||(e.code === "Digit1")||(e.code === "Digit2")||(e.code === "Digit3")||(e.code === "Digit4")||(e.code === "Digit5")||(e.code === "Digit6")||(e.code === "Digit7")||(e.code === "Digit8")||(e.code === "Digit9")||(e.code === "Digit0")||(e.code === "Period")||(e.code === "Comma")||(e.code === "Quote")||(e.code === "Semicolon")||(e.code === "Slash"))
    e.preventDefault();
  }
}
