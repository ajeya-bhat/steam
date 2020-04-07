import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"user",component:UserhomeComponent},
  {path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
