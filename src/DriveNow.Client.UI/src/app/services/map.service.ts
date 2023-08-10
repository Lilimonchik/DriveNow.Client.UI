import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarsForMap} from "../interfaces/cars-for-map";
import {AUTH_API_URL} from "../app.injection-tokens";

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
  changeStatus(carId: string){
    this.http.post(`${this.apiUrl}CarAction/ChangeCarStatus`,carId);
  }
}
