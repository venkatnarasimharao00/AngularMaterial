import { Component, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private _service:LoginService,
              private _router:Router) { }
  ngOnInit() {
    
  }
  public login(obj:any):any{
    this._service.authenticate(obj).subscribe((posRes)=>{
      if(posRes.login == "success"){

        console.log(obj.uname);
       
        window.localStorage.setItem("login_details",JSON.stringify(posRes));
        this._router.navigate(["/dashboard/about"]);
      }else{
        alert("Login Fail !!!")
      }
    },(errRes:HttpErrorResponse)=>{
      if(errRes.error instanceof Error){
        console.log("Client Side Error !!!");
      }else{
        console.log("Server Side Error !!!");
      }
    });
  };
}
