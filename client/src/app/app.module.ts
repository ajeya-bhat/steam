import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {UserService} from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { AllgamesComponent } from './allgames/allgames.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';
import { DescriptionComponent } from './description/description.component';
import { StatisticsComponent } from './statistics/statistics.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    HomeComponent,
    AllgamesComponent,
    AboutusComponent,
    CartComponent,
    DescriptionComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }