import { Component, OnInit } from "@angular/core";
import { LoginService } from '../services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
    
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
})
export class LoginComponents implements OnInit{

    private result: any;
    private LoginSubScribe: any;
    constructor(private _service: LoginService) {};
    ngOnInit() {
        // stop here if form is invalid
        this.LoginSubScribe =
            this._service.Login().subscribe((posRes) => {
                this.result = posRes;
            }, (errRes: HttpErrorResponse) => {
                if (errRes.error instanceof Error) {
                    console.log("Client Side Error !!!");
                } else {
                    console.log("Server Side Error !!!");
                }
            });
    };
    ngOnDestroy(){
        this.LoginSubScribe.unsubscribe();
    };
}