import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {Loader} from "@googlemaps/js-api-loader";
import {MapInfoWindow, MapMarker} from "@angular/google-maps";
import {Position} from "../../interfaces/position";
import {MapService} from "../../services/map.service";
import {CarsForMap} from "../../interfaces/cars-for-map";
import {Coordinates} from "../../interfaces/Coordinates";
import {GeocodingService} from "../../services/geocoding.service";
import {flatMap} from "rxjs";
import {Order} from "../../interfaces/order";

@Component({
  selector: 'app-map-car',
  templateUrl: './map-car.component.html',
  styleUrls: ['./map-car.component.scss']
})
export class MapCarComponent implements OnInit {
  constructor(private maps: MapService,
              private cdRef: ChangeDetectorRef) {

  }

  /*
    public urlIcon: string = "/assets/images/bmwe60.png"

    map: any;

    check: boolean = true;
    timer: any;
    count: number = 0;
    seconds: number = 0;
    minutes: number = 0;
    hours: number = 0;
    isTimerRunning: boolean = false;

    order: Order = new Order();

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
    public geocoding!: google.maps.Geocoder;
    ngOnInit() {
      // Initialize the geocoding object
      this.geocoding = new google.maps.Geocoder();

      this.maps.showCarsForMap().subscribe((res) => {
        console.log(res);
        this.cars = res;
        for (const car of res) {
          this.geocoding.geocode({ address: car.address }, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK && results) {
              const coordinate = {
                latitude: results[0].geometry.location.lat(),
                longitude: results[0].geometry.location.lng(),
              };
              this.coordinates.push(coordinate);
            }
          });
        }
      });
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

    startTimer() {
      this.check = !this.check;
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
        this.count = 0;
      }
    }
    updateTimerValues() {
      this.seconds = this.count % 60;
      this.minutes = Math.floor((this.count / 60) % 60);
      this.hours = Math.floor(this.count / 3600);
    }

    changeStatusCar(carId: string){
      this.maps.changeStatus(carId).subscribe((res)=>{
        console.log(res.message);
      })
    }

    createOrder(carId: string, promocode: string){
      this.maps.createOrder(carId,promocode).subscribe((res)=>{
        console.log(res.message);
      })
    }

    createCartItem(carId: string, price: number){
      this.maps.createCartItem(carId,price).subscribe((res)=>{
        console.log(res.message);
      })
    }
   */
  private map!: google.maps.Map;

  public cars: CarsForMap[] = [];

  public geocoding!: google.maps.Geocoder;

  latitude: number = -33.867;
  longitude:number = 151.206;

  public coordinates: Coordinates[] = [];

  check: boolean = true;
  infoWindowContent : string = '';
  ngOnInit() {
    this.getLocation();
    let loader = new Loader({
      apiKey: 'AIzaSyAl6G985ANRdxocfm2QYQzzPeHYqYdxDk4'
    });

    loader.load().then(() => {
      console.log("Successful!");
    });
    const location = {
      lat: this.latitude,
      lng: this.longitude,
    }
    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: {lat: this.latitude, lng: this.longitude},
      zoom: 12,
      scaleControl: false,
      zoomControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      mapTypeControl: false,
    });
    this.geocoding = new google.maps.Geocoder();

    this.maps.showCarsForMap().subscribe((res) => {
      console.log(res);
      this.cars = res;
      for (const car of res) {
        this.geocoding.geocode({ address: car.address }, (results, status) => {
          if (status === google.maps.GeocoderStatus.OK && results) {
            const marker = new google.maps.Marker({
              position: { lat:results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() },
              map: this.map,
              title: car.nameCar // Optional title
            });
            const infoWindow = new google.maps.InfoWindow({
              content: this.infoWindowContent
            });
            marker.addListener('click', () => {
              this.updateInfoWindowContent(car); // Pass the current car to update content
              infoWindow.setContent(this.infoWindowContent);
              infoWindow.open(this.map, marker);
            });
          }
        });
        console.log(this.coordinates);
      }
    });
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
  toggleInfoContent(Car: CarsForMap) {
    this.check = !this.check;
    this.updateInfoWindowContent(Car);
  }
  updateInfoWindowContent(car: CarsForMap) {
    if (this.check) {
      this.infoWindowContent = `<div style="
    padding: 10px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
">
    <h3 style="
        margin: 0;
        font-size: 18px;
    ">${car.nameCar}</h3>
    <img src="https://drive-now.s3.eu-west-2.amazonaws.com/${car.photoUrl}" [alt]="${car.nameCar}" width="100%" style="
        max-height: 150px;
        margin-top: 10px;
    ">
    <p style="
        font-size: 14px;
        margin-top: 10px;
    ">${car.address}</p>
    <button class="action" (click)="${this.toggleInfoContent(car)}" style="
        background-color: #FF7A00;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 3px;
        cursor: pointer;
        margin-top: 10px;
    ">Rent</button>
</div>
      `;
    }
  else if(!this.check) {
      this.infoWindowContent = `
        <div class="main-window">
        <h3>${car.nameCar}</h3>
        <img src="https://drive-now.s3.eu-west-2.amazonaws.com/${car.photoUrl}" [alt]="car.carId" width="150" height="100">
    </div>
      `;
    }
    // Trigger change detection to update the view
    this.cdRef.detectChanges();
  }
}