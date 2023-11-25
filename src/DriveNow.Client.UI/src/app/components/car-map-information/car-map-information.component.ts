import {Component, Input} from '@angular/core';
import {CarsForMap} from "../../interfaces/cars-for-map";
import {MapService} from "../../services/map.service";
import {TripModel} from "../../interfaces/TripModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-car-map-information',
  templateUrl: './car-map-information.component.html',
  styleUrls: ['./car-map-information.component.scss']
})
export class CarMapInformationComponent {
  @Input() carInfo!: CarsForMap;
  @Input() map!: google.maps.Map;
  @Input() markers!: google.maps.Marker[];
  constructor(private maps: MapService,
              private router: Router) {
  }
  startTrip(carId: string){
    this.maps.startTrip(carId).subscribe((res)=>{
      this.deleteMarkers();
      var position = {lat: res.latitude, lng: res.longitude}
      this.addMarker(position);
      this.router.navigateByUrl('/map-car', { skipLocationChange: true }).then(() => {
        this.router.navigate(['./map-car']);
      });
    });
  }

  public icon = {
    url: "./assets/images/marker-7246182_640.png", // url
    scaledSize: new google.maps.Size(30, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };

  hideMarkers(): void {
    this.setMapOnAll(null);
  }
  deleteMarkers(): void {
    this.hideMarkers();
    this.markers = [];
  }
  setMapOnAll(map: google.maps.Map | null) {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }

  addMarker(position: google.maps.LatLng | google.maps.LatLngLiteral) {
    const marker = new google.maps.Marker({
      position: position,
      map: this.map,
      icon: this.icon
    });
    marker.addListener('click',()=>{
      //this.onMarkerClick("Successful!");
    })
    this.markers.push(marker);
  }
}
