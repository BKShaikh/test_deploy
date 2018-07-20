import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./app/login/login.component"
import { SignupComponent } from "./app/signup/signup.component"
import { SolutionComponent } from "./app/solution/solution.component"
import { BlogComponent } from "./app/blog/blog.component"
import { HelpComponent } from "./app/help/help.component"
import { MainComponent } from "./app/main/main.component"
import { HomePageComponent } from "./app/home-page/home-page.component"
import { LoginAnimatedComponent } from "./app/login-animated/login-animated.component"

export const APP_ROUTES: Routes = [

    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'sign_up', component: SignupComponent
    },
    {
        path: 'solution', component: SolutionComponent
    },
    {
        path: 'blog', component: BlogComponent
    },
    {
        path: 'help', component: HelpComponent
    },
    {
        path: 'home', component: MainComponent
    },
    {
        path: 'index', component: HomePageComponent
    },
    {
        path: 'user_login', component: LoginAnimatedComponent
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    }

];

export const routing = RouterModule.forRoot(APP_ROUTES);