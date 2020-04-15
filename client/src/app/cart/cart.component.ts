import { CartService } from './../shared/cart.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/cart.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent implements OnInit {

  constructor(public cartService:CartService) { }
  public selectedContact :Cart;
  ngOnInit(): void {
    this.getc();
  }

  Buyer(){
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
    });
  }
  delc(_id:string){
    if(confirm("Delete?")==true){
    this.cartService.delcart(_id).subscribe((res)=>{
      this.getc();
    });}
    
  }

}
