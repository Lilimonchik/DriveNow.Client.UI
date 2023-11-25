import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-cabinet-list',
  templateUrl: './cabinet-list.component.html',
  styleUrls: ['./cabinet-list.component.scss']
})
export class CabinetListComponent {

  constructor(private auth: AuthService) {
  }

  log_out(){
    this.auth.logout();
  }
}
