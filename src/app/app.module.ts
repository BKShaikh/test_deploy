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
import { HomePageComponent } from './home-page/home-page.component';
import { GoalComponent } from './goal/goal.component';
import { DiscoverComponent } from './discover/discover.component';
import { DimensionsComponent } from './dimensions/dimensions.component';
import { NavbarHeaderIndexComponent } from './navbar-header-index/navbar-header-index.component';
import { LoginAnimatedComponent } from './login-animated/login-animated.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SolutionComponent,
    BlogComponent,
    HelpComponent,
    LoginComponent,
    SignupComponent,
    NavbarHeaderComponent,
    HomePageComponent,
    GoalComponent,
    DiscoverComponent,
    DimensionsComponent,
    NavbarHeaderIndexComponent,
    LoginAnimatedComponent
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
