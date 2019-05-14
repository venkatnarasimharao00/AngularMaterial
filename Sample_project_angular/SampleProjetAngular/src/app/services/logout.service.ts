import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  constructor(private _http:HttpClient) { }
  public logout():any{
    var obj = window.localStorage.getItem("login_details");
    var obj1 = JSON.parse(obj);
    return this._http.post("http://localhost:8080/logout",{token:obj1.token});
  };
}
