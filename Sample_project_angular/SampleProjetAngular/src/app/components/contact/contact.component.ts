import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {
  private result:any;
  constructor(private _service:ContactService) { }
  ngOnInit() {
    this._service.getContactModuleData().subscribe((posRes)=>{
        this.result = posRes;
    },(err:HttpErrorResponse)=>{
        if(err.error instanceof Error){
          console.log("Client Side Error !!!");
        }else{
          console.log("Server Side Error !!!");
        }
    });
  }

}
