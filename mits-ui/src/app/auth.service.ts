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

    this._http.post(`/oauth/token?grant_type=password&client_id=mandiri_mits&password=${_user.password}&username=${_user.username}`, {}, {
      headers: new HttpHeaders().set("Authorization", `Basic ${btoa('mandiri_mits:123456')}`)
    }).subscribe(
      data => {
        localStorage.setItem("token", data.access_token);
      },
      err => alert('Invalid Credentials'));
  }

}
