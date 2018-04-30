import {Injectable} from "@angular/core";
import {User} from "./user";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class AuthService {

  constructor(private _http: HttpClient) {
  }

  public createToken(_user: User) {
    let params = new URLSearchParams();
    params.append('username', _user.username);
    params.append('password', _user.password);
    params.append('grant_type', 'password');
    params.append('client_id', 'mandiri_mits');

    let headers = new HttpHeaders();
    headers.append("Authorization", `Basic ${btoa('mandiri_mits:123456')}`);
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append("Access-Control-Allow-Credentials", "true");

    this._http.post(`http://localhost:10000/oauth/token?grant_type=password&client_id=mandiri_mits&password=${_user.password}&username=${_user.username}`, {}, {
      headers: headers
    }).subscribe(
      data => console.log(data),
      err => alert('Invalid Credentials'));
  }

}
