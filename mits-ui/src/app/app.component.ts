import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private _authService: AuthService){}

  ngOnInit(): void {
    this._authService.createToken(
      {username: "user", password: "password"}
      );
  }

}
