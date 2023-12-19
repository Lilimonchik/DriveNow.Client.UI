import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Order} from "../../interfaces/order";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit{

  filteredLocationList: Order[] = [];

  orderList: Order[] = [];

  sortingOptions = ['carId', 'orderTime', 'Price per hour', 'totalPrice'];
  selectedSortingOption: string = '';

  constructor(private user: UserService) {
  }
  ngOnInit() {
    this.user.showUserOrders().subscribe((res)=>{
      this.orderList = res;
    })
  }
  onCarSelectionChange() {
    console.log('Selected Car ID:', this.selectedSortingOption);
    this.sortOrders();
  }

  sortOrders() {
    if (this.selectedSortingOption === 'orderTime') {
      this.orderList.sort((a, b) => {
        const dateA = new Date(a.orderTime).getTime();
        const dateB = new Date(b.orderTime).getTime();
        return dateA - dateB;
      });
    } else if (this.selectedSortingOption === 'carId') {
      this.orderList.sort((a, b) => {
        return a.carId.localeCompare(b.carId);
      });
    } else if (this.selectedSortingOption === 'Price per hour') {
      this.orderList.sort((a, b) => {
        return a.car.price - b.car.price;
      });
    } else if (this.selectedSortingOption === 'totalPrice') {
      this.orderList.sort((a, b) => {
        return a.totalPrice - b.totalPrice;
      });
    }
  }
}
