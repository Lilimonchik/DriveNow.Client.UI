import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarsForMap} from "../interfaces/cars-for-map";
import {AUTH_API_URL} from "../app.injection-tokens";
import {Order} from "../interfaces/order";
import {Result} from "../interfaces/result";
import {CartItem} from "../interfaces/cartItem";
import {TripModel} from "../interfaces/TripModel";
import {Car} from "../interfaces/Enums/Car";

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient,
              @Inject(AUTH_API_URL) private apiUrl: string,
              ) { }

  showCarsForMap(): Observable<CarsForMap[]>{
    return this.http.get<CarsForMap[]>(`${this.apiUrl}CarController/ShowCarsForMap`);
  }
  createOrder(carId: string):Observable<string>{
    // @ts-ignore
    return this.http.post<string>(`${this.apiUrl}api/payment/create-payment`,{carId}, {responseType: 'text'});
  }

  startTrip(CarId: string): Observable<TripModel>{
    return this.http.post<TripModel>(`${this.apiUrl}TripController/StartTrip`,{CarId: CarId});
  }

  checkTrip(): Observable<TripModel>{
    return this.http.get<TripModel>(`${this.apiUrl}TripController/CheckTrip`);
  }
  
  showAllCars(): Observable<Car[]>{
    return this.http.get<Car[]>(`${this.apiUrl}CarController/ShowAllCars`);
  }
  showCarDetails(carId: string): Observable<Car>{
    const params = new HttpParams().set('carId', carId);
    return this.http.get<Car>(`${this.apiUrl}CarController/ShowCarDetails`,{params: params});
  }
}