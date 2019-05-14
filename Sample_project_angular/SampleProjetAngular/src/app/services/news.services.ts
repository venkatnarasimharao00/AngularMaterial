import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class newsService {
  constructor(private _http:HttpClient) { }
  public getnewsModuleData():any{
    var obj = window.localStorage.getItem("login_details");
    var obj1 = JSON.parse(obj);
    return this._http.post("http://localhost:8080/news",{token:obj1.token});
  };
};