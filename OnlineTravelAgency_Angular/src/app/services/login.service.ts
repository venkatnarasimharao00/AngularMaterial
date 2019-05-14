import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:"root"
})
export class LoginService{
    constructor(private _http:HttpClient){}
    public login(obj:any):Observable<any>{
        return this._http.post("http://desktop-lmsbpjg:8082/Ewheelz/LoginForm.jsp",obj);
    };
}