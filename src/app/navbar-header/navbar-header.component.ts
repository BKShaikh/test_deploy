import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.css']
})
export class NavbarHeaderComponent implements OnInit {
  isCollapsed: boolean;
  constructor(private router: Router) {
    this.isCollapsed = true;
   }
   if(isCollapsed = true) {
    console.log("bilal")
  }
  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
  }
  login() {
    this.router.navigate(['login'])
  }
  signup() {
    this.router.navigate(['sign_up'])
  }
  home(){
    this.router.navigate(['home'])
  }
}
