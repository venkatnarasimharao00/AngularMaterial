import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { NewsComponent } from '../components/news/news.component';
export const appRoutes:Routes = [
    {path:"",component:LoginComponent},
    {path:"dashboard",component:DashboardComponent,
    children:[
        {path:"about",component:AboutComponent},
        {path:"contact",component:ContactComponent},
        {path:"news",component:NewsComponent}
    ]}
];