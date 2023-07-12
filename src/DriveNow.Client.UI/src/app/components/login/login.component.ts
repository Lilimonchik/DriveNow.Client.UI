import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PromptMomentNotification} from "google-one-tap";
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import {AuthService} from "../../services/auth.service";
import {UserFromGoogle} from "../../interfaces/user-from-google";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(
      private auth: AuthService,
      private socialAuthService: SocialAuthService,

      private router: Router,
  ) {
  }
  singInForm = new FormGroup({
      number: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  ngOnInit() {
    this.socialAuthService.authState.subscribe((user)=>{
      this.socialUser = user;
      var token = this.socialUser.idToken;
      console.log(token);
      this.auth.loginWithGoogle(token).subscribe(res=>{
        console.log(res);
        this.router.navigate(["/"]);
          }
      );
    })
  }
  socialUser!: SocialUser;
  loginWithGoogle(){
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  login(){
    this.auth.login(this.singInForm.value).subscribe(res=>{
      console.log(res);
    })
  }
}
