import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AUTH_API_URL} from "../app.injection-tokens";
import {UserFromGoogle} from "../interfaces/user-from-google";
import {catchError, Observable, tap, throwError} from "rxjs";
import {Token} from "../interfaces/token";
import {Router} from "@angular/router";
import {RegistrationUser} from "../interfaces/registration-user";
import {UserInformation} from "../interfaces/user-information";
export const ACCESS_TOKEN_KEY = 'bookstore_access_token';

class User {
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              @Inject(AUTH_API_URL) private apiUrl: string,
              private router: Router
              ) { }

  public loginWithGoogle(credential: string){
    return this.http.post(`${this.apiUrl}SingIn/SingInWithGoogle`,{credential: credential},{responseType:"text"}).pipe(
        tap(token=>{
            if(token != null) {
                localStorage.setItem(ACCESS_TOKEN_KEY, token);
            }
            else{
                console.log("Error!");
            }
        })
    )
  }
  public login(User: User){
      return this.http.post(`${this.apiUrl}SingIn/SingInUser`,User,{responseType: 'text'}).pipe(
          tap(token=>{
              if(token != null) {
                  localStorage.setItem(ACCESS_TOKEN_KEY, token);
                  console.log(token);
              }
              else{
                  console.log("Error!");
              }
          }),
      )
  }
  public logout(): void{
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      this.router.navigate(['/']);
  }

  public signUp(User: RegistrationUser){
      return this.http.post(`${this.apiUrl}RegistrationController/Registration`,User);
  }

  public ShowUserInfo():Observable<UserInformation>{
      return this.http.get<UserInformation>(``);
  }
}