import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor() { }
  chart1:boolean=true;
  chart2:boolean=false;
  chart3:boolean=false;
  chart4:boolean=false;
  chart5:boolean=false;

  
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

  title="dashboard";
  chart=[];
  public assArr = new Object();
  xlabels=['a','b'];
  yvalues=[1,2];
  
  ngOnInit(): void {
    this.chart=new Chart('canvas',{
      type: 'bar',
      data: {
              labels: this.xlabels,
              datasets: [{
                  label: '# of games',
                  data: this.yvalues,
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
                  ],
                  borderWidth: 1
              }]
          },
          
      });
    
  }



}
