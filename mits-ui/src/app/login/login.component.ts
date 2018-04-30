import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup(
    {
      username: new FormControl(),
      password: new FormControl()
    }
  );

  constructor() {
  }

  ngOnInit() {
  }

  login() {
    console.log(this.formLogin.value);
  }
}
