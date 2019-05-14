import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { newsService } from 'src/app/services/news.services';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styles: []
})
export class NewsComponent implements OnInit {
  private result:any;
  constructor(private _service:newsService) { }

  ngOnInit() {
    this._service.getnewsModuleData().subscribe((posRes)=>{
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