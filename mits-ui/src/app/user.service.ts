import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) {
  }

  public getUser(){
    return this._http.get("http://localhost:10001/api/user");
  }
}
