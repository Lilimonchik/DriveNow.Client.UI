import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomepageComponent } from "./components/homepage/homepage.component";
import { CarlistingComponent } from './components/carlisting/carlisting.component';

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent, title: 'home'},
  {path: 'login', component: LoginComponent, title: 'login'},
  {path: 'signup', component: SignupComponent, title: 'signup'},
  {path: '', component: CarlistingComponent, title: 'carlisting'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }