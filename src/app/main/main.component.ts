import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
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
  solution() {
    this.router.navigate(['solution'])
  }
  help() {
    this.router.navigate(['help'])
  }
  blog() {
    this.router.navigate(['blog'])
  }
}
