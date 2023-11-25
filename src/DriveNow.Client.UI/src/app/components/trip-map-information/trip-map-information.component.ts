import {Component, Inject, Input, OnInit} from '@angular/core';
import {TripModel} from "../../interfaces/TripModel";
import {MapService} from "../../services/map.service";
import {DOCUMENT} from "@angular/common";
import {catchError, throwError} from "rxjs";

@Component({
  selector: 'app-trip-map-information',
  templateUrl: './trip-map-information.component.html',
  styleUrls: ['./trip-map-information.component.scss']
})
export class TripMapInformationComponent implements OnInit{
  @Input() carInfo!: TripModel;
  @Input() dateNow!: number;
  @Input() markers!: google.maps.Marker[];
  constructor(private maps: MapService,
              @Inject(DOCUMENT) private document: Document) {
  }
  display: any;
  interval: any;
  newDate: any;
  currentDate: any;
  hours: any;
  minutes: any;
  time: any;
  seconds: any;
  ngOnInit() {
    this.currentDate = new Date(Date.now());
    var carDate = new Date(this.carInfo.startTrip);
    var timeDifference = this.currentDate.getTime() - carDate.getTime();
    this.time = timeDifference/1000;
    this.startTimer();

  }

  public icon = {
    url: "./assets/images/marker-7246182_640.png", // url
    scaledSize: new google.maps.Size(30, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };

  createOrder(carId: string){
    this.maps.createOrder(carId).subscribe((res)=>{
      console.log(res);
      window.open(res,"_self");
    })
  }
  startTimer() {
    console.log("=====>");
    this.interval = setInterval(() => {
      if (this.time === 0) {
        this.time++;
      } else {
        this.time++;
      }
      this.display=this.transform( this.time)
    }, 1000);
  }
  transform(value: number): string {
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value - hours * 3600) / 60);
    const seconds = Math.floor(value - hours * 3600 - minutes * 60);

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
}
