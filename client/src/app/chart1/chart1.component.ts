import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit {

  constructor() { }

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


