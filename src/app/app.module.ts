import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SolutionComponent } from './solution/solution.component';
import { BlogComponent } from './blog/blog.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { routing } from '../route' ;
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SolutionComponent,
    BlogComponent,
    HelpComponent,
    LoginComponent,
    SignupComponent,
    NavbarHeaderComponent
    // NgbModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
