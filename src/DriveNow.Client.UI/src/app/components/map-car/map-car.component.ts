import {Component, OnInit, ViewChild} from '@angular/core';
import {Loader} from "@googlemaps/js-api-loader";
import {MapInfoWindow, MapMarker} from "@angular/google-maps";
import {Position} from "../../interfaces/position";
import {MapService} from "../../services/map.service";
import {CarsForMap} from "../../interfaces/cars-for-map";
import {Coordinates} from "../../interfaces/Coordinates";
import {GeocodingService} from "../../services/geocoding.service";
import {flatMap} from "rxjs";

@Component({
  selector: 'app-map-car',
  templateUrl: './map-car.component.html',
  styleUrls: ['./map-car.component.scss']
})
export class MapCarComponent implements OnInit {
  constructor(private maps: MapService,
              private geocoding: GeocodingService) {

  }

  public urlIcon: string = "/assets/images/bmwe60.png"

  map: any;

  check: boolean = true;
  timer: any;
  count: number = 0;
  seconds: number = 0;
  minutes: number = 0;
  hours: number = 0;
  isTimerRunning: boolean = false;



  latitude: number = -33.867;
  longitude:number = 151.206;

  mapOptions = {
    zoom: 12,
    center: {lat: this.latitude, lng: this.longitude},
    scaleControl: false,
    zoomControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
  }
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  //markers: any[] = [];
  public cars: CarsForMap[] = [];

  public coordinates: Coordinates[] = [];

  iconOptions: google.maps.Icon = {
    url: '/assets/images/bmwe60.png',
    scaledSize: new google.maps.Size(150, 60) // Set your desired height and width here
  };

  ngOnInit() {
    this.maps.showCarsForMap().subscribe((res)=>{

      console.log(res);
      this.cars = res;
      for(const car of res){
        this.geocoding.getAddressCoordinates(car.address).subscribe(
            (geocodedData: any) => {
              if (geocodedData.status === 'OK') {
                const location = geocodedData.results[0].geometry.location;
                const coordinate = {
                  latitude: location.lat,
                  longitude: location.lng
                };
                this.coordinates.push(coordinate);
              }
            })
      }
      console.log(this.coordinates);
    })
    this.getLocation();
  }
  getLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log(this.longitude);
      },
          (error) =>{
        this.latitude = -33.867;
        this.longitude = 151.206;
          })
    }
    else{
      console.error("Geolocation is not supported by this browser.");
    }
  }
  openInfoWindow(marker: MapMarker) {
    if (this.infoWindow != undefined) this.infoWindow.open(marker);
  }

  startTimer(carId: string) {
    this.check = !this.check;
    this.changeStatusCar(carId);
    if (!this.isTimerRunning) {
      this.isTimerRunning = true;
      this.timer = setInterval(() => {
        this.count++;
        console.log(this.count)
        this.updateTimerValues();
      }, 1000); // Update count every 1000 milliseconds (1 second)
    }
  }

  pauseTimer() {
    this.check = !this.check;
    if (this.isTimerRunning) {
      clearInterval(this.timer);
      this.isTimerRunning = false;
    }
  }
  updateTimerValues() {
    this.seconds = this.count % 60;
    this.minutes = Math.floor((this.count / 60) % 60);
    this.hours = Math.floor(this.count / 3600);
  }

  changeStatusCar(carId: string){
    this.maps.changeStatus(carId);
  }
}
