import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('userForm')
  userForm!: NgForm; 
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddUser(userData:{fimage:File,fname:string ,fprice:number}){
    console.log(userData)
  }
}
