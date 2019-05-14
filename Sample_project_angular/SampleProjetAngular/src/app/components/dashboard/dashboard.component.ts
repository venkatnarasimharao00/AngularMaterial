import { Component, OnInit, Input,Output } from '@angular/core';
import { LogoutService } from 'src/app/services/logout.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  public uname:string;
  constructor(private _service:LogoutService,
              private _router:Router) { }
  ngOnInit() {
    this.uname=sessionStorage.getItem("uname");
  }
  public logout():any{
    this._service.logout().subscribe((posRes)=>{
      if(posRes.logout == "success"){
        window.localStorage.removeItem("login_details");
        this._router.navigate(["/"]);
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
