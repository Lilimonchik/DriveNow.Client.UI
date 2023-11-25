import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarsForMap} from "../interfaces/cars-for-map";
import {AUTH_API_URL} from "../app.injection-tokens";
import {Order} from "../interfaces/order";
import {Result} from "../interfaces/result";
import {CartItem} from "../interfaces/cartItem";

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient,
              @Inject(AUTH_API_URL) private apiUrl: string,
              ) { }

  showCarsForMap(): Observable<CarsForMap[]>{
    return this.http.get<CarsForMap[]>(`${this.apiUrl}CarAction/ShowCarsForMap`);
  }

  // @ts-ignore
  changeStatus(carId: string): Observable<Result> {
    return this.http.post<Result>(`${this.apiUrl}CarAction/${carId}/changeStatusById`, carId);
  }

  createOrder(carId: string, promocode: string):Observable<Result>{
    const model = new Order;
    model.Promocode = promocode;
    model.CarId = carId;
    return this.http.post<Result>(`${this.apiUrl}OrderAction/CreateOrder`,model);
  }

  createCartItem(carId: string, price: number): Observable<Result>{
    const model = new CartItem;
    model.carId = carId;
    model.price = price;
    return this.http.post<Result>(`${this.apiUrl}CartController/AddCartItem`,model);
  }
}