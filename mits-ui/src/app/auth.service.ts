import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {

  public getToken(): string {
    return localStorage.getItem("access_token");
  }

  public isAuthenticated(): boolean {
    return this.getToken() != null;
  }

}
