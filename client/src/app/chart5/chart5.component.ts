import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-chart5',
  templateUrl: './chart5.component.html',
  styleUrls: ['./chart5.component.css']
})
export class Chart5Component implements OnInit {

  constructor() { }

  title="dashboard";
  chart=[];
  public assArr = new Object();
  xlabels=['a','b'];
  yvalues=[1,2];
  ngOnInit(): void {

    this.chart=new Chart('canvas',{
      type: 'line',

        // The data for our dataset
        data: {
        labels: this.xlabels,
        datasets: [{
            label: 'Price in $',
            borderColor: 'rgb(255, 99, 132)',
            data: this.yvalues
        }]
    },

    // Configuration options go here
    options: {
    }
});
    
  }
}
