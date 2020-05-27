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
  public selectedDetail :any={};
  
  ngOnInit(): void {
    this.getc();
    interval(5000).subscribe(
      x => {
        console.log("hi");
        this.getc();
      });
    
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
    console.log("HERE"+typeof(this.un));
    if(typeof(this.un)==="undefined" || typeof(this.em)==="undefined"){
      alert("Fields cannot be empty!");
      return;
    }
    console.log("HERE1");
    var email1 = "email";
    var games1 = "games";
      var name1 = "name";
      var totalprice1 = "totalprice";
      this.selectedDetail[name1]=this.un;
      this.selectedDetail[email1]=this.em;
      this.selectedDetail[games1]=this.stri;
      this.selectedDetail[totalprice1]=this.tp;
    if(confirm(" You can check out more games!!Buy now?")==true){
      this.cartService.postdetail(this.selectedDetail).subscribe((res)=>{
        console.log(res);
      });
      this.cartService.dcart().subscribe((res)=>{
        console.log(res);
        this.getc();
        
        document.getElementById("dis").textContent="Thank you for buying";
      });

    }
  }

  getc(){
    this.tp=0;
      this.stri="";
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
      this.getc();
    });}
    
  }

}

