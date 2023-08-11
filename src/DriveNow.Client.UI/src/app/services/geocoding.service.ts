import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  private apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
  private apiKey = 'AIzaSyDHUEW0CyHkIUG0C5-dCqms-_utGzMuwMQ';

  constructor(private http: HttpClient) { }

  getAddressCoordinates(address: string): Observable<any> {
    const url = `${this.apiUrl}?address=${encodeURIComponent(address)}&key=${this.apiKey}`;
    return this.http.get(url);
  }
}
