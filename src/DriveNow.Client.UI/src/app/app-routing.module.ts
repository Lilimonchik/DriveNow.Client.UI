import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {HomepageComponent} from "./components/homepage/homepage.component";

const routes: Routes = [
  {path: '', component: HomepageComponent, title: 'home'},
  {path: 'login', component: LoginComponent, title: 'login'},
  {path: 'signup', component: SignupComponent, title: 'signup'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
