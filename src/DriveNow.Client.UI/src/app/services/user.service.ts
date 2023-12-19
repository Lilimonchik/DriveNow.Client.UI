import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AUTH_API_URL} from "../app.injection-tokens";
import {Observable} from "rxjs";
import {Order} from "../interfaces/order";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
              @Inject(AUTH_API_URL) private apiUrl: string)
  { }

  showUserOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.apiUrl}api/payment/ShowUserOrders`);
  }
}
