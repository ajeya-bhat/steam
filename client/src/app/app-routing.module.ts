import { CartComponent } from './cart/cart.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AllgamesComponent } from './allgames/allgames.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactusComponent } from './contactus/contactus.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path : "",component:HomeComponent},
  {path : "home",component:HomeComponent},
  {path:"contactus",component:ContactusComponent},
  {path : "allgames",component:AllgamesComponent},
  {path:"aboutus", component:AboutusComponent},
  {path:"cart",component:CartComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
