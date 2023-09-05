import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {UserInformation} from "../../interfaces/user-information";
import {Langueges} from "../../interfaces/Enums/Langueges";
import {Sexs} from "../../interfaces/Enums/Sexs";

@Component({
  selector: 'app-settings-admin',
  templateUrl: './settings-admin.component.html',
  styleUrls: ['./settings-admin.component.scss']
})
export class SettingsAdminComponent implements OnInit{
  constructor(private auth: AuthService) {
  }
  user!: UserInformation;

  hide = true;

  changeData: FormGroup = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.min(5)]),
    secondName: new FormControl('',[Validators.required, Validators.min(5)]),
    password: new FormControl('',[Validators.required,Validators.min(6)]),
    birthday: new FormControl(''),
    language: new FormControl(''),
    sex: new FormControl('')
  });

  change_contact: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    number: new FormControl('',[Validators.required,Validators.min(10)]),
  })

  check_data: boolean = false;

  check_contact: boolean = false;

  ngOnInit() {
    this.auth.ShowUserInfo().subscribe((res)=>{
      this.user = res;
    })
  }

  protected readonly Langueges = Langueges;
  protected readonly Sexs = Sexs;

  changeDataUser(){

  }
  change_contact_user(){

  }
  create_new_password(){

  }
}