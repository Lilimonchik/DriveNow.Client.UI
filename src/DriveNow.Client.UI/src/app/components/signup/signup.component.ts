import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent{

}
