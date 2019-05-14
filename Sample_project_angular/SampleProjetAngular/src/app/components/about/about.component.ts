import { Component, OnInit, Input } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
  @Input() uname:string;
  private result:any;
  constructor(private _service:AboutService) { }

  ngOnInit() {
    this._service.getAboutModuleData().subscribe((posRes)=>{
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