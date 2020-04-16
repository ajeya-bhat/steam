import { Component, OnInit } from '@angular/core';

import { CartService } from './../shared/cart.service';

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
    console.log(this.p1);
    console.log(this.p2);
    var pp1 = "p1";
    var pp2 = "p2";
    this.selectedStat[pp1]=this.p1;
    this.selectedStat[pp2]=this.p2;
    this.cartService.poststat(this.selectedStat).subscribe((res)=>{
      console.log(res);
    });
  }
}
