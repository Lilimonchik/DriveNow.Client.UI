import {Car} from "./Enums/Car";

export class Order{

    carId : string = "";

    orderId: string = "";

    car: Car = new Car();

    orderTime: Date = new Date();

    promocode: string = "";

    totalPrice: number = 0;
}