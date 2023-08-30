import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-promo-code',
  templateUrl: './promo-code.component.html',
  styleUrls: ['./promo-code.component.scss']
})
export class PromoCodeComponent {

  constructor(private auth: AuthService) {
  }

  check: boolean = true;

  promo_code_group: FormGroup = new FormGroup({
    promocodeName: new FormControl('',[Validators.required,Validators.min(3)]),
    sum: new FormControl('',[Validators.required,Validators.min(1)])
  });

  addPromoCodeToAccount(){

  }
}
