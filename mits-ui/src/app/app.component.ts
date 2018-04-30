import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _userService: UserService) {

  }

  ngOnInit(): void {
    this._userService.getUser().subscribe(
      data => {
        console.log(data);
      }, error => {
        console.error(error);
      });
  }

}
