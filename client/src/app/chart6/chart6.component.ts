import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-chart6',
  templateUrl: './chart6.component.html',
  styleUrls: ['./chart6.component.css']
})
export class Chart6Component implements OnInit {

  constructor() { }

  title="dashboard";
  chart=[];
  public assArr = new Object();
 xlabels=['Action;Casual;Indie', 'Indie', 'Action;Adventure;Indie', 'RPG;Strategy', 'Action', 'Adventure;Casual', 'Adventure;Casual;Indie', 'Action;Adventure;Casual;Indie', 'Indie;Strategy', 'Action;Adventure', 'Action;Indie', 'Action;Indie;Early Access', 'Casual;Indie', 'Adventure', 'Adventure;Indie', 'Action;Indie;RPG', 'Casual', 'RPG', 'Casual;Indie;Strategy', 'Casual;Indie;Simulation', 'Indie;Simulation;Strategy', 'Adventure;Indie;RPG'];
 yvalues=[12, 11, 16, 3, 5, 5, 7, 4, 5, 5, 17, 5, 14, 4, 10, 4, 7, 5, 5, 7, 3, 3];
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
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
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
                scaleLabel: {
                  display: true,
                  labelString: '# of games'
                },
                ticks: {
                  beginAtZero: true
              }
              }
              ],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'genre'
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

