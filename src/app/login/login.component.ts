import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login_data = { email: '', password: "" }
  error: boolean = true
  constructor(private router: Router) { }

  ngOnInit() {
  }
  validate() {
    if (this.login_data.email == "abc@live.com" && this.login_data.password == "123") {
      return true
    }
    return false
  }
  val() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(String(this.login_data.email).toLowerCase()))
    this.error = re.test(String(this.login_data.email).toLowerCase())
  }
  signup(){
    this.router.navigate(['sign_up'])
  }
  login(){
    this.router.navigate(['index'])
  }
}
