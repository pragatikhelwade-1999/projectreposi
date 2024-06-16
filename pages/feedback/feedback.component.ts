import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
 import { HttpClient } from '@angular/common/http';
 import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  currentRate:number=0
  newRate:number=0
 public remainingWords = 0;

  public textareaForm = new FormGroup ({
    rate:new FormControl(''),
     Rat:new FormControl(''),
     taste: new FormControl('',[Validators.required]),
    textinput: new FormControl(''),
    
   

  });
 
  submitted= false;

  ngOnInit() {
  }

  wordCounter() {
    this.remainingWords = this.textareaForm.value ? 0 + this.textareaForm.value.textinput.length : 100;
    if (this.remainingWords >= 151) {
      this.textareaForm.controls['textinput'].disable();
    }
  }
  
 constructor( private fb: FormBuilder, private http: HttpClient, private router: Router) { }
 res: any


feedback(){
  this.http.post<any>("http://localhost:3000/feedback", this.textareaForm.value)
  .subscribe(res=> {
     alert("your Responce Submited Successfully!!");
   this.textareaForm.reset();
  
  },err=>{
    alert("Something went wrong")
  })
  this.submitted = true;
    if (this.textareaForm.valid) {
    
      console.log(this.textareaForm.value);
    }

}


}
