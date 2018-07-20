import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import "../../assets/login-animation.js";
@Component({
  selector: 'app-login-animated',
  templateUrl: './login-animated.component.html',
  styleUrls: ['./login-animated.component.css']
})
export class LoginAnimatedComponent implements OnInit {
  login_data = { email: '', password: "" }
  error: boolean = true
  constructor(private router: Router) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    (window as any).initialize();
  }
  login(){
    if (!this.validate()) {
      return
    }
    this.router.navigate(['index'])
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
}
