import { Contactus } from './contactus.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {
  
  contactus : Contactus[];
  readonly baseUrl = "http://localhost:3000/cart/contactus";
  constructor(private http:HttpClient) { }

  postcontactus(cont : Contactus){
    return this.http.post(this.baseUrl,cont);
  }
}
