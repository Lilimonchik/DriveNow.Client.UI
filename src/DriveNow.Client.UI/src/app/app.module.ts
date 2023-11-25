import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarlistingComponent } from './components/carlisting/carlisting.component';
import { CardetailsComponent } from './components/cardetails/cardetails.component';
import {GoogleLoginProvider, GoogleSigninButtonModule, SocialAuthServiceConfig} from "@abacritt/angularx-social-login";
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {AUTH_API_URL} from "./app.injection-tokens";
import {environment} from "../environments/environmnet";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MapCarComponent } from './components/map-car/map-car.component';
import {GoogleMapsModule} from "@angular/google-maps";
import { ProfileComponent } from './components/profile/profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from '@angular/material/expansion';
import {CommonModule} from "@angular/common";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatSliderModule} from "@angular/material/slider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {MatStepperModule} from "@angular/material/stepper";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTreeModule} from "@angular/material/tree";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatBadgeModule} from "@angular/material/badge";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatRippleModule} from "@angular/material/core";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {OrdersComponent} from "./components/orders/orders.component";
import {CabinetListComponent} from "./components/cabinet-list/cabinet-list.component";
import {SettingsUserComponent} from "./components/settings-user/settings-user.component";
import {PromoCodeComponent} from "./components/promo-code/promo-code.component";
import {PaymentsComponent} from "./components/payments/payments.component";
import { SettingsAdminComponent } from './components/settings-admin/settings-admin.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminPromocodeComponent } from './components/admin-promocode/admin-promocode.component';
import { AdminUsersListComponent } from './components/admin-users-list/admin-users-list.component';
import { AdminCarListComponent } from './components/admin-car-list/admin-car-list.component';
import { AdminCheckDocumentsComponent } from './components/admin-check-documents/admin-check-documents.component';
import { CarMapInformationComponent } from './components/car-map-information/car-map-information.component';
import { TripMapInformationComponent } from './components/trip-map-information/trip-map-information.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    FooterComponent,
    CarlistingComponent,
    CardetailsComponent,
    MapCarComponent,
    ProfileComponent,
    SidebarComponent,
    AboutComponent,
    ContactComponent,
      OrdersComponent,
      CabinetListComponent,
      SettingsUserComponent,
      PromoCodeComponent,
      PaymentsComponent,
      SettingsAdminComponent,
    AdminListComponent,
    AdminOrdersComponent,
    AdminPromocodeComponent,
    AdminUsersListComponent,
    AdminCarListComponent,
    AdminCheckDocumentsComponent,
    CarMapInformationComponent,
    TripMapInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleSigninButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    HttpClientJsonpModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatButtonModule,
    MatExpansionModule,
    CommonModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [
    {
      provide: AUTH_API_URL,
      useValue:environment.authApi,
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('369595234454-n8mv45pctmor3h6eemef6a5vtk6movc4.apps.googleusercontent.com'),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
