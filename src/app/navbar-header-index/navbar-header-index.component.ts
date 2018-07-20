import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-navbar-header-index',
  templateUrl: './navbar-header-index.component.html',
  styleUrls: ['./navbar-header-index.component.css']
})
export class NavbarHeaderIndexComponent implements OnInit {
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
}
