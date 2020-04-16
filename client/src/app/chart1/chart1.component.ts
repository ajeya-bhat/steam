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
  xlabels=["windows", "windows;mac", "windows;mac;linux", "windows;linux"];
  yvalues=[179, 38, 48, 5] ;
  ngOnInit(): void {

    this.chart=new Chart('canvas',{
      type: 'bar',
      data: {
              labels: this.xlabels,
              datasets: [{
                  label: '# of games',
                  data: this.yvalues,
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)'
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
          options: {
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'games'
                }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'platform/s'
                }
              }]
            } 
          }
      });
    
  }
/* getData()
{
    const resp = fetch("Game_Updated_Final.csv");
    console.log(resp);
    const data = resp;
    const table = data.split('\n').slice(1);
    table.forEach(row =>{const columns = row.split(',');
    const platform = columns[7];

        if(this.assArr[platform]>=1)
        {
            //console.log("here");
            this.assArr[platform]+=1;
        }
 
        if(this.assArr[platform] == undefined)
        {
            this.assArr[platform]=1;
        }
        

    ;
    });*/
    
}


