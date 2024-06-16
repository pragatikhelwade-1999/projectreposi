import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactUs, feedback, signupUsers } from './Users';



@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  
  
  
  constructor( private http:HttpClient) { }
  url : string  = "http://localhost:3000/signupUsers";
 
 
  getsignupUsers()
  {
    return this.http.get<signupUsers[]>(this.url);
  }
  // deletesignupUsers(){
  //   return this.http.delete<signupUsers[]>(this.url);
  // }

  url1 : string  = "http://localhost:3000/ContactUs";


  getContactUs()
  {
    return this.http.get<ContactUs[]>(this.url1);
  }

  url2 : string  = "http://localhost:3000/feedback";


  getfeedback()
  {
    return this.http.get<feedback[]>(this.url2);
  }

 }
   

