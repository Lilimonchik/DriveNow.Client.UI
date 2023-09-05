import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomepageComponent } from "./components/homepage/homepage.component";
import { CarlistingComponent } from './components/carlisting/carlisting.component';
import { CardetailsComponent } from './components/cardetails/cardetails.component';
import {MapCarComponent} from "./components/map-car/map-car.component";
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import {SettingsUserComponent} from "./components/settings-user/settings-user.component";
import {OrdersComponent} from "./components/orders/orders.component";
import {PaymentsComponent} from "./components/payments/payments.component";
import {PromoCodeComponent} from "./components/promo-code/promo-code.component";

const routes: Routes = [
  {path: '', component: HomepageComponent, title: 'Home'},
  {path: 'login', component: LoginComponent, title: 'Login'},
  {path: 'signup', component: SignupComponent, title: 'Signup'},
  {path: 'carlisting', component: CarlistingComponent, title: 'Carlisting'},
  {path: 'cardetails', component: CardetailsComponent, title: 'Cardetails'},
  {path: 'map-car', component: MapCarComponent, title: 'Cars'},
  {path: 'profile', component: ProfileComponent, title: 'Profile'},
  {path: 'about', component: AboutComponent, title: 'About'},
  {path: 'contact', component: ContactComponent, title: 'Contact'},
  {path: 'settings',component: SettingsUserComponent,title:'Settings'},
  {path: 'orders',component: OrdersComponent, title: 'Orders'},
  {path: 'payments', component: PaymentsComponent, title: 'Payments'},
  {path: 'promo-code',component: PromoCodeComponent, title: 'Promo-code'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }