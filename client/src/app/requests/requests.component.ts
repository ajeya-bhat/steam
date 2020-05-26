import { Component, OnInit } from '@angular/core';

import { CartService } from './../shared/cart.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  public p1:String;
  public p2:String;
  constructor(public cartService:CartService) { }

  public selectedStat :any={};

  ngOnInit(): void {
  }

  req(){
    console.log(typeof(this.p1));
    if(typeof(this.p1)==="undefined" || typeof(this.p2)==="undefined" ){
      alert("Fields cannot be empty!");
      return;
    }
    var pp1 = "p1";
    var pp2 = "p2";
    this.selectedStat[pp1]=this.p1;
    this.selectedStat[pp2]=this.p2;
    this.cartService.poststat(this.selectedStat).subscribe((res)=>{
      console.log(res[0]);
      (<HTMLInputElement>document.getElementById("p1")).value="";
      (<HTMLInputElement>document.getElementById("p2")).value="";
      if(typeof(res[0])==="undefined"){
      document.getElementById("dis").textContent="Your Request is Noted";
        this.p1=undefined;this.p2=undefined;
    }
      else{
        document.getElementById("dis").textContent="This Entry is already present";
        this.p1=undefined;this.p2=undefined;
      }
    });
  }
}
