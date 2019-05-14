import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponents } from './components/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';


@NgModule({
  declarations: [
    AppComponent,LoginComponents
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,HttpClientModule,FormsModule
  ],
  providers: [LoginService],
  bootstrap: [LoginComponents]
})
export class AppModule { }
