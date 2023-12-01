import { Component } from '@angular/core';
import {FormControl, FormControlName, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {


  contactUs = new FormGroup({
    firstName: new FormControl(''),
    secondName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    message: new FormControl('')
  });
}
