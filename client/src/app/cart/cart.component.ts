import { CartService } from './../shared/cart.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/cart.model';
import { interval } from 'rxjs';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent implements OnInit {
  public tp:number=0;
  public stri:String="";
  public un:String;
  public em:String;
  public u:String;
  public e:String;

  constructor(public cartService:CartService) { }
  public selectedContact :Cart;
  ngOnInit(): void {
    this.getc();
  }

  geti(){
    this.u=document.getElementById("un").nodeValue;
    this.e=document.getElementById("em").nodeValue;
  }

  Buyer(){
    this.geti();
    console.log(this.stri);
    console.log(this.tp);
    console.log(this.un);
    console.log(this.em);
    
    if(confirm(" You can check out more games!!Buy now?")==true){
      this.cartService.dcart().subscribe((res)=>{
        this.getc();
        document.getElementById("dis").textContent="Thank you for buying";
      });

    }
  }

  getc(){
    this.cartService.getcart().subscribe((res)=>{
      this.cartService.carts=res as Cart[];
      for(let i=0;i<this.cartService.carts.length-1;i++){
        this.tp+=this.cartService.carts[i].price;
        this.stri+=this.cartService.carts[i].name;
        this.stri+=",";
    }
    this.tp+=this.cartService.carts[this.cartService.carts.length-1].price;
        this.stri+=this.cartService.carts[this.cartService.carts.length-1].name;
        let u=this.tp.toFixed(2);
        this.tp=parseFloat(u);
        console.log(this.tp);
    });
  
  }
  delc(_id:string){
    if(confirm("Delete?")==true){
    this.cartService.delcart(_id).subscribe((res)=>{
      this.tp=0;
      this.stri="";
      this.getc();
    });}
    
  }

}
