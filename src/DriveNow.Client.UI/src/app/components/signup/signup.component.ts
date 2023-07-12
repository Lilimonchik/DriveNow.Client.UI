import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import {UserFromGoogle} from "../../interfaces/user-from-google";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  constructor(private auth: AuthService,

              private socialService: SocialAuthService,

              private router: Router
              ) {
  }
  socialUser!: SocialUser;

  ngOnInit() {
    this.socialService.authState.subscribe((user)=>{
      this.socialUser = user;
      this.auth.loginWithGoogle(user.idToken).subscribe(res=>{
        console.log(res);
        this.router.navigate(['/']);
      })
    })
  }

  logInWithGoogle(){
   this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
