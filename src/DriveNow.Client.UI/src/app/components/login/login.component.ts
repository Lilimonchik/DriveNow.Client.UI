import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(private auth: AuthService,

              private router: Router,

              private google: SocialAuthService
              ) {
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
  });
  socialUser!: SocialUser;
  ngOnInit() {
    this.google.authState.subscribe(res=>{
      this.socialUser = res;
      this.auth.loginWithGoogle(this.socialUser.idToken).subscribe(res =>{
        console.log(res);
        this.router.navigate(['/']);
      })
    })
  }

  login(){
    this.auth.login(this.loginForm.value).subscribe((res)=>{
      this.router.navigate(['/']);
    })
  }
}
