import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import {Route, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NumberOrEmailValidator, validate} from "../../interfaces/custom-validations";
import {LiqPayService} from "../../services/liqpay.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  constructor(private auth: AuthService,
              private router: Router,
              private google: SocialAuthService,
              private liqpay: LiqPayService
              ) {
  }

  singUpForm: FormGroup = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.min(1)]),
    secondName: new FormControl('',[Validators.required,Validators.min(1)]),
    emailOrNumber: new FormControl('',[Validators.required, Validators.min(13),NumberOrEmailValidator, Validators.min(13)]),
    password: new FormControl('',[Validators.required, Validators.min(5)]),
    confirmPassword: new FormControl('',[Validators.required,Validators.min(5), validate])
  });
  socialUser!: SocialUser;
  ngOnInit() {
    this.google.authState.subscribe( res => {
      this.socialUser = res;
      this.auth.loginWithGoogle(this.socialUser.idToken).subscribe(res => {
        this.router.navigate(['/']);
      })
    })
  }

  signUp(){
    this.auth.signUp(this.singUpForm.value).subscribe(res=>{
      console.log(res);
    })
  }
  initiatePayment(){
    this.liqpay.initiatePayment();
  }
}
