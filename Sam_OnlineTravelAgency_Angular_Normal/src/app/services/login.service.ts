import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:"root"
})
export class LoginService{
    constructor(private _http:HttpClient){}
    public Login():Observable<any>{
        return this._http.get("https://voliveafrica.com/webservices/get_all_users.php");
    };
}