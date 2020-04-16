import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { CartService } from './../shared/cart.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  
  constructor(public cartService:CartService) { }
  chart1:boolean=true;
  chart2:boolean=false;
  chart3:boolean=false;
  chart4:boolean=false;
  chart5:boolean=false;
  chart6:boolean=false;
  request:boolean=false;

  
  onchart1(){
    this.chart1=true;this.chart2=false;this.chart3=false;this.chart4=false;this.chart5=false;this.chart6=false;this.request=false;
  }
  onchart6(){
    this.chart1=false;this.chart2=false;this.chart3=false;this.chart4=false;this.chart5=false;this.chart6=true;this.request=false;
  }
  onchart2(){
    this.chart2=true;this.chart1=false;this.chart3=false;this.chart4=false;this.chart5=false;this.chart6=false;this.request=false;
  }
  onchart4(){
    this.chart4=true;this.chart1=false;this.chart3=false;this.chart2=false;this.chart5=false;this.chart6=false;this.request=false;
  }
  onchart3(){
    this.chart3=true;this.chart1=false;this.chart2=false;this.chart4=false;this.chart5=false;this.chart6=false;this.request=false;
  }
  onchart5(){
    this.chart5=true;this.chart1=false;this.chart3=false;this.chart4=false;this.chart2=false;this.chart6=false;this.request=false;
  }
  onrequest(){
    this.chart5=false;this.chart1=false;this.chart3=false;this.chart4=false;this.chart2=false;this.chart6=false;this.request=true;
  }
  ngOnInit(): void {
}

}
