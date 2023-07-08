import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component'; 

const routes: Routes = [
  //{path: '', component: HomePageComponent, title: 'home'},
  {path: 'login', component: LoginComponent, title: 'login'},
  {path: 'signup', component: SignupComponent, title: 'signup'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
