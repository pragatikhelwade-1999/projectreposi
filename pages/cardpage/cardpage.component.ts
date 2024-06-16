import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators,FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-cardpage',
  templateUrl: './cardpage.component.html',
  styleUrls: ['./cardpage.component.css']
})
export class CardpageComponent implements OnInit {
  checkoutForm!:FormGroup;
    submitted = false;

  constructor(
    private fb: FormBuilder,
    
  ) { }


  ngOnInit() {
    this.checkoutForm=this.fb.group({
      number:new FormControl('',[Validators.required, Validators.minLength(5)]),
      name:new FormControl('',[Validators.required]),
      amount:new FormControl('',[Validators.required]),
     
  });
}
  get signupFormControl() {
    return this.checkoutForm.controls;
  }
  signupUser(): void {
    this.submitted = true;
    if (this.checkoutForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.log(this.checkoutForm.value);
     
    }
  }
}

