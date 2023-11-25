import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Loader} from "@googlemaps/js-api-loader";
import {MapService} from "../../services/map.service";
import {CarsForMap} from "../../interfaces/cars-for-map";
import {Coordinates} from "../../interfaces/Coordinates";
import {TripModel} from "../../interfaces/TripModel";

@Component({
  selector: 'app-map-car',
  templateUrl: './map-car.component.html',
  styleUrls: ['./map-car.component.scss']
})
export class MapCarComponent implements OnInit {
  constructor(private maps: MapService,
              private cdRef: ChangeDetectorRef) {

  }

  @Output() markerClick: EventEmitter<any> = new EventEmitter();

  onMarkerClick(info: string) {
    this.markerClick.emit({title: info });
  }
  private map!: google.maps.Map;

  public cars: CarsForMap[] = [];

  public carsShow! : CarsForMap | undefined;

  public infoCarAll!: CarsForMap | undefined;

  public tripInfo!: TripModel | null;

  public markers: google.maps.Marker[] = [];

  public geocoding!: google.maps.Geocoder;

  latitude: number = -33.867;
  longitude: number = 151.206;

  public coordinates: Coordinates[] = [];

  public trip!: TripModel | null;


  check: boolean = true;
  infoWindowContent: string = '';

  public icon = {
    url: "./assets/images/marker-7246182_640.png", // url
    scaledSize: new google.maps.Size(30, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };

  ngOnInit() {
    console.log(this.trip);
    this.getLocation();
    let loader = new Loader({
      apiKey: 'AIzaSyDfzm6sjJfkjtkTZhDEdNPfKATc0TMKPTM'
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
      /*
      styles: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
        },
      ],*/
    });
    this.maps.checkTrip().subscribe((res) => {
      this.trip = res;
      console.log(res);
      if(res.status){
        var position = {lat: res.latitude, lng: res.longitude}
        this.addMarker(position,res.carId);
        console.log(this.markers);
      }
    },
        (error) => {
          this.maps.showCarsForMap().subscribe((res) => {
            console.log(res);
            this.cars = res;
            for (const car of res) {
              var position = {lat: car.latitude, lng: car.longitude}
              this.addMarker(position, car.carId);
            }
          });
        })
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            console.log(this.longitude);
          },
          (error) => {
            this.latitude = -33.867;
            this.longitude = 151.206;
          })
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  startTrip(carId: string){
    this.maps.startTrip(carId).subscribe((res)=>{
      this.deleteMarkers();
      var position = {lat: res.latitude, lng: res.longitude}
      this.addMarker(position,carId);
    });
  }
  checkUserTrip(){
    this.maps.checkTrip().subscribe((res)=>{
      if(res != null){
        this.trip = res;
        console.log(res);
      }
    })
  }

  addMarker(position: google.maps.LatLng | google.maps.LatLngLiteral, carId: string) {
    const marker = new google.maps.Marker({
      position: position,
      map: this.map,
      icon: this.icon
    });
    marker.addListener('click',() => {
      if(this.trip != null) {
        this.tripInfo = this.trip;
        console.log(this.tripInfo);
      }
      else if (this.cars.length != 0){
        this.infoCarAll = this.cars.find(car => car.carId == carId);
        this.carsShow = this.infoCarAll;
      }
    })
    this.markers.push(marker);
  }

  // Removes the markers from the map, but keeps them in the array.
  hideMarkers(): void {
    this.setMapOnAll(null);
  }

  // Deletes all markers in the array by removing references to them.
  deleteMarkers(): void {
    this.hideMarkers();
    this.markers = [];
  }
  setMapOnAll(map: google.maps.Map | null) {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }
}