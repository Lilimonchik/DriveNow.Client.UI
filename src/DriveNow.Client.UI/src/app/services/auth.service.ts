import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AUTH_API_URL} from "../app.injection-tokens";
import {UserFromGoogle} from "../interfaces/user-from-google";
import {Observable, tap} from "rxjs";
import {Token} from "../interfaces/token";
import {Router} from "@angular/router";
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

  public loginWithGoogle(user_from_google: UserFromGoogle): Observable<Token>{
    return this.http.post<Token>(`${this.apiUrl}SingIn/SingInWithGoogle`,user_from_google).pipe(
        tap(token=>{
          localStorage.setItem(ACCESS_TOKEN_KEY,token.access_token);
        })
    )
  }

  public login(User: User):Observable<Token>{
      return this.http.post<Token>(`${this.apiUrl}SingIn/SingInUser`,User).pipe(
          tap(token=>{
              localStorage.setItem(ACCESS_TOKEN_KEY,token.access_token);
          })
      )
  }

  public logout(): void{
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      this.router.navigate(['/']);
  }

}
