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
 xlabels=["Action;Casual;Indie","Racing","Action;Casual;Indie;Sports;Early Access","Indie","Action;Indie;Strategy","Action;Adventure;Indie","Action;Free to Play;Indie;Massively Multiplayer","Action;RPG;Simulation;Strategy","Action;Adventure;Casual;Indie;Early Access","Indie;Strategy;Early Access","RPG;Strategy","Action","Action;Indie;RPG;Strategy","Strategy","Violent;Gore;Action;Indie;Strategy","Adventure;Casual","Casual;Indie;Simulation;Strategy;Early Access","Free to Play","Adventure;Casual;Indie","Action;Adventure;Casual;Indie","Indie;Strategy","Action;Adventure","Action;Indie","Action;Indie;Early Access","Gore;Adventure","Casual;Indie","Indie;RPG;Strategy","Adventure","Simulation","Violent;Gore;Action;Adventure;Indie","Action;Casual;Indie;Simulation;Strategy","Adventure;Indie","Utilities","Action;Adventure;Casual;Indie;Strategy","Action;Adventure;Casual","Action;Free to Play;Indie","Casual;Simulation","Adventure;Casual;Simulation;Strategy","Action;Indie;RPG","Sexual Content;Nudity;Violent;Casual;Indie","Casual","RPG","Free to Play;Indie;RPG","Indie;Early Access","Casual;Free to Play;Indie;Simulation","Casual;Indie;Simulation;Strategy","Casual;Free to Play","Action;RPG;Early Access","Indie;RPG","Casual;Indie;Strategy","Adventure;Indie;Simulation","Action;Racing","Casual;RPG","Casual;Indie;Simulation","Action;Indie;Sports","Strategy;RPG;Indie","Casual;Indie;Massively Multiplayer;Early Access","Indie;Racing;Simulation;Sports","Action;Indie;Simulation;Sports","Action;Strategy","Free to Play;Massively Multiplayer;RPG","Violent;Gore;Action;Free to Play;Indie","Action;Adventure;Simulation","Action;Indie;Casual","Violent;Gore;Adventure;Indie;Simulation","Animation & Modeling;Design & Illustration;Utilities","Adventure;Indie;Sports","Racing;Simulation;Sports","Indie;Simulation;Strategy","Action;Casual;Indie;Simulation;Sports","Action;Adventure;Indie;Early Access","Adventure;Indie;RPG","Action;Adventure;Indie;RPG;Sports","Action;Adventure;Massively Multiplayer;Simulation","Action;Casual;Indie;Strategy","Sports","Violent;Casual;RPG;Simulation;Strategy","Action;Adventure;Indie;Simulation","Casual;Indie;RPG","Sexual Content;Free to Play;Indie","Action;Casual;Free to Play;Indie","Adventure;Casual;Indie;RPG;Strategy","Action;Adventure;Indie;RPG;Strategy;Early Access","Racing;Simulation","Indie;Simulation;Strategy;Early Access","Casual;Indie;Racing","Action;Adventure;Indie;Racing;Simulation","Adventure;Casual;Indie;Simulation","Adventure;Casual;Simulation;Early Access","Action;Adventure;Indie;Simulation;Early Access","Action;Adventure;Indie;RPG;Strategy","Action;Adventure;Casual;Free to Play;Indie;Massively Multiplayer;Racing;RPG;Simulation;Sports;Strategy","Sexual Content;Nudity;Indie;RPG;Simulation","Violent;Gore;Action;Adventure;RPG","Adventure;Casual;Indie;RPG","Action;Indie;Racing;Early Access","Adventure;Casual;Indie;RPG;Simulation;Strategy","Action;Casual;Indie;Simulation","Action;Simulation","Violent;Adventure;Indie","Action;Adventure;Casual;Free to Play;Indie","Adventure;Simulation","Adventure;Indie;Strategy","Simulation;Strategy","Action;Casual;Indie;Racing;Simulation;Sports","Action;Indie;Simulation","Action;Indie;Racing;Simulation;Sports","Action;Simulation;Strategy","Indie;RPG;Simulation;Early Access","Indie;RPG;Strategy;Early Access","Action;Casual;Simulation;Early Access","Violent;Action;Indie;Early Access","Indie;RPG;Simulation;Strategy","Action;Simulation;Early Access","Indie;Racing","Adventure;Indie;RPG;Simulation;Strategy","Indie;Massively Multiplayer;RPG;Early Access","Action;Adventure;Free to Play;RPG","Adventure;Indie;Massively Multiplayer","Action;Adventure;RPG","Action;Adventure;Indie;RPG"];
 yvalues=[12,2,1,11,2,16,1,1,1,2,3,5,1,2,1,5,1,1,7,4,5,5,17,5,1,14,2,4,2,1,1,10,2,1,1,2,2,1,4,1,7,5,1,1,1,2,1,1,1,5,2,1,1,7,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,2,3,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
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
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
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
