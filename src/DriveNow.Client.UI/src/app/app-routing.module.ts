import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomepageComponent } from "./components/homepage/homepage.component";
import { CarlistingComponent } from './components/carlisting/carlisting.component';
import { CardetailsComponent } from './components/cardetails/cardetails.component';
import {MapCarComponent} from "./components/map-car/map-car.component";
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path: '', component: HomepageComponent, title: 'home'},
  {path: 'login', component: LoginComponent, title: 'login'},
  {path: 'signup', component: SignupComponent, title: 'signup'},
  {path: 'carlisting', component: CarlistingComponent, title: 'carlisting'},
  {path: 'cardetails', component: CardetailsComponent, title: 'cardetails'},
  {path: 'map-car', component: MapCarComponent, title: 'Cars'},
  {path: 'profile', component: ProfileComponent, title: 'Profile'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }