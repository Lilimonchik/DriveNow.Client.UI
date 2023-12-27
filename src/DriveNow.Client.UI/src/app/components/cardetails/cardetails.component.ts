import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Car} from "../../interfaces/Enums/Car";
import {MapService} from "../../services/map.service";

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.scss']
})
export class CardetailsComponent implements OnInit {
  constructor(
      private route: ActivatedRoute,
      private cars: MapService
  ) {}
  public roomId: string = "";
  public car!: Car;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('carId');
      if (id !== null) {
        this.roomId = id;
        console.log(id);
      } else {
        // Handle the case where 'id' is null, e.g., provide a default value or throw an error.
        console.error("Error: 'id' parameter is null.");
      }
    });
    debugger;
    this.cars.showCarDetails(this.roomId).subscribe((res)=>{
      this.car = res;
      console.log(res);
    });
  }

}
