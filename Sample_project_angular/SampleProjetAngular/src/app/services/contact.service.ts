import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private _http:HttpClient) { }
  public getContactModuleData():any{
    var obj = window.localStorage.getItem("login_details");
    var obj1 = JSON.parse(obj);
    return this._http.post("http://localhost:8080/contact",{token:obj1.token});
  };
}
