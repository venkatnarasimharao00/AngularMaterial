import { Component, OnInit } from "@angular/core";
import { LoginService } from '../services/login.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
    selector: "app-login",
    templateUrl: "./login.component.html"
})
export class LoginComponents {
    // userDetails: FormGroup;
    private result: any;
    private LoginSubScribe: any;
    submitted = false;
    // private obj:any ={
    //     "username":'',
    //     "password":""
    // };
    constructor(private _service:LoginService) {
        // this.userDetails = new FormGroup({
        //     username: new FormControl("", [Validators.required]),
        //     password: new FormControl("",[Validators.required])
        // });
    };
    // convenience getter for easy access to form fields
    
    // get f() { return this.userDetails.controls; }
    public login(obj:any):any {
        // this.submitted = true;

        // stop here if form is invalid
        // if (this.userDetails.invalid) {
        //     return;
        // }
        this.LoginSubScribe =
            this._service.login(obj).subscribe((posRes) => {
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