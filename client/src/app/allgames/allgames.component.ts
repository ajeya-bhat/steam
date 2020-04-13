import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allgames',
  templateUrl: './allgames.component.html',
  styleUrls: ['./allgames.component.css']
})
export class AllgamesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  games:any[]=[
    {appid:1,name:"a",
    developer:"a",publisher:"a",
    platforms:"a",required_age:0,
    categories:"a",genres:"a",
    average_playtime:"a",owners:2,
    price:4,header_image:"https://steamcdn-a.akamaihd.net/steam/apps/768290/header.jpg?t=1552569749"},
  ]; 
}
