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
import { SettingsAdminComponent } from './components/settings-admin/settings-admin.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminPromocodeComponent } from './components/admin-promocode/admin-promocode.component';
import { AdminUsersListComponent } from './components/admin-users-list/admin-users-list.component';
import { AdminCarListComponent } from './components/admin-car-list/admin-car-list.component';
import { AdminCheckDocumentsComponent } from './components/admin-check-documents/admin-check-documents.component';

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
  {path: 'settings-admin',component: SettingsAdminComponent, title: 'Settings-admin'},
  {path: 'admin-list',component: AdminListComponent, title: 'Admin-list'},
  {path: 'admin-orders',component: AdminOrdersComponent, title: 'Admin-orders'},
  {path: 'admin-promocode',component: AdminPromocodeComponent, title: 'Admin-promo-code'},
  {path: 'admin-users-list',component: AdminUsersListComponent, title: 'Admin-users-list'},
  {path: 'admin-car-list',component: AdminCarListComponent, title: 'Admin-car-list'},
  {path: 'admin-check-documents',component: AdminCheckDocumentsComponent, title: 'Admin-check-documents'},
  { path: 'cardetails/:carId', component: CardetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }