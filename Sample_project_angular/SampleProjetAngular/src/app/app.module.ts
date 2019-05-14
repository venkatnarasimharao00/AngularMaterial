import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routings/app.routes';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { LogoutService } from './services/logout.service';
import { AboutService } from './services/about.service';
import { ContactService } from './services/contact.service';
import { newsService } from './services/news.services';
import { NewsComponent } from './components/news/news.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule,HttpClientModule
  ],
  providers: [LoginService,LogoutService,AboutService,ContactService,newsService],
  bootstrap: [IndexComponent]
})
export class AppModule { }
