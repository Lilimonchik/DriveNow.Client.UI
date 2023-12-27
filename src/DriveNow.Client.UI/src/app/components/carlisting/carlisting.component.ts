import {Component, OnInit} from '@angular/core';
import {MapService} from "../../services/map.service";
import {Car} from "../../interfaces/Enums/Car";

@Component({
  selector: 'app-carlisting',
  templateUrl: './carlisting.component.html',
  styleUrls: ['./carlisting.component.scss']
})
export class CarlistingComponent implements OnInit{


  constructor(private cars: MapService) {
  }
  public carList: Car[] = [];
  ngOnInit() {
    this.cars.showAllCars().subscribe((res)=>{
      this.carList = res;
      console.log(res);
    });
  }
}
