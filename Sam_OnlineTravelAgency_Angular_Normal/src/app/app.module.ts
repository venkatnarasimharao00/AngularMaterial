import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponents } from './components/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import{FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,LoginComponents
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [LoginService],
  bootstrap: [LoginComponents]
})
export class AppModule { }
