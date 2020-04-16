import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit {

  constructor() { }

  title="dashboard";
  chart=[];
  public assArr = new Object();
  xlabels=["2003", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"];
  yvalues=[1, 1, 3, 1, 4, 4, 2, 3, 1, 5, 16, 26, 36, 61, 88, 19];
  ngOnInit(): void {

    this.chart=new Chart('canvas',{
      type: 'bar',
        data: {
                //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                labels: this.xlabels,
                datasets: [{
                    label: '# of games',
                    data: this.yvalues,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                 'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
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
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
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
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel: {
                          display: true,
                          labelString: 'games'
                        }
                    }],
                    xAxes: [{
                      scaleLabel: {
                        display: true,
                        labelString: 'year'
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
