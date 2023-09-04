import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AUTH_API_URL} from "../app.injection-tokens";
@Injectable({
  providedIn: 'root'
})
export class LiqPayService {
    constructor(private http: HttpClient,
                @Inject(AUTH_API_URL) private apiUrl: string) {
    }

    initiatePayment() {
        // Replace with your LiqPay payment data
        // Define your LiqPay payment request parameters
        const paymentRequest = {
            action: 'pay',
            version: '3',
            amount: '100',
            currency: 'USD',
            description: 'Payment for Order #123',
            order_id: '123',
            public_key: 'sandbox_i21688834201',
            private_key: 'sandbox_SQ8Wu9QY1XfXmaqmy4wu1TpL1qC4WTu0KQ83DhD7',
            // Add other parameters as needed
        };

// Construct the LiqPay payment URL
        const liqPayUrl = `https://www.liqpay.ua/api/3/checkout?public_key=${paymentRequest.public_key}&amount=${paymentRequest.amount}&currency=${paymentRequest.currency}&description=${paymentRequest.description}&order_id=${paymentRequest.order_id}`;

// Open a new window or tab for LiqPay payment
        const paymentWindow = window.open(liqPayUrl, '_blank');

// Check if the window was successfully opened
        if (paymentWindow) {
            // Handle success, e.g., log or perform other actions
        } else {
            // Handle if the window couldn't be opened, e.g., show an error message
            alert('Please allow pop-ups for this website to make a payment.');
        }

    }
}
