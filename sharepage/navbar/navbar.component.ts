import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user!: string;

  
  constructor(private router:Router) { }

  ngOnInit(): void { }

  loggedin(){
   
    return localStorage.getItem('Users');
  }
  onLogout(){
    alert("you are logged out")
    localStorage.removeItem('Users');
    this.router.navigate(['login']);
         
     
  }
  isAdmin(){
    
    //    const user:any =  localStorage.getItem('Users');
    //    //console.log(JSON.parse(user));
    
    // if(!user){
    //   console.log( user.isAdmin)
    //   return user.isAdmin
    // }
    // return true
  }

  }
 
  
 


