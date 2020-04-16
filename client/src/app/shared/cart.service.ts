import { Detail } from './detail.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stat } from './stat.model';
import { Cart } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  carts : Cart[];
  stats : Stat[];
  details : Detail[];
  readonly baseUrl = "http://localhost:3000/cart/carts/";
  readonly baseUrl1 = "http://localhost:3000/cart/detail/";
  readonly baseUrl2 = "http://localhost:3000/cart/stats/";
  constructor(private http:HttpClient) { }

  postcart(cont : any){
    return this.http.put(this.baseUrl,cont);
  }
  getcart(){
    return this.http.get(this.baseUrl);
  }

  delcart(_id:string){
    return this.http.delete(this.baseUrl+`${_id}`);
  }
  dcart(){
    return this.http.delete(this.baseUrl);
  }

  postdetail(cont:any){
    return this.http.post(this.baseUrl1,cont);
  }

  poststat(cont:any){
    return this.http.post(this.baseUrl2,cont);
  }
}
