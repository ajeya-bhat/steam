import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { CartService } from './../shared/cart.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  public p1:String;
  public p2:String;
  constructor(public cartService:CartService) { }
  chart1:boolean=true;
  chart2:boolean=false;
  chart3:boolean=false;
  chart4:boolean=false;
  chart5:boolean=false;
  public selectedStat :any={};

  
  onchart1(){
    this.chart1=true;this.chart2=false;this.chart3=false;this.chart4=false;this.chart5=false;
  }
  onchart2(){
    this.chart2=true;this.chart1=false;this.chart3=false;this.chart4=false;this.chart5=false;
  }
  onchart4(){
    this.chart4=true;this.chart1=false;this.chart3=false;this.chart2=false;this.chart5=false;
  }
  onchart3(){
    this.chart3=true;this.chart1=false;this.chart2=false;this.chart4=false;this.chart5=false;
  }
  onchart5(){
    this.chart5=true;this.chart1=false;this.chart3=false;this.chart4=false;this.chart2=false;
  }
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
