import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  public appid;
  public url;
  public price;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id=parseInt(this.route.snapshot.paramMap.get('appid'));
    console.log(id);
    this.appid=id;
    this.getdesc();
  }
  public selectedCart :any={};

  games:any[]=[
    {steam_id: '17460',appid: 717000,name: 'SKIMMERZ',
  releasedate: '2017-10-14',english: 1,
  developer: 'Harrison Went',publisher: 'Harrison Went',
  platforms: 'windows',required_age: 0,
  categories: 'Single-player$Partial Controller Support',genres: 'Action$Casual$Indie',
  steam_spytags: 'Action$Indie$Casual',achievements: 0,
  positive_ratings: 1,negative_ratings: 0,
  average_playtime: 0,median_playtime: 0,
  owners: '0-20000',price: '1.69',
  header_image: 'https://steamcdn-a.akamaihd.net/steam/apps/717000/header.jpg?t=1511492408',background: 'https://steamcdn-a.akamaihd.net/steam/apps/717000/page_bg_generated_v6b.jpg?t=1511492408',
  short_description: 'Battle the enemy 3 rounds at a time in SKIMMERZ. Utilise game changing abilities to turn the tide and unlock each unique skimmer as you progress through colourful arena style maps.'},
  {steam_id: '2418',appid: 269430,name: 'Burning Cars',
  releasedate: '2014-01-31',english: 1,
  developer: 'Polynetix Studio',publisher: 'Polynetix Studio',
  platforms: 'windows',required_age: 0,
  categories: 'Single-player$Steam Achievements$Full controller support$Steam Trading Cards$Partial Controller Support',genres: 'Racing',
  steam_spytags: 'Racing',achievements: 15,
  positive_ratings: 4,negative_ratings: 32,
  average_playtime: 0,median_playtime: 0,
  owners: '50000-100000',price: '4.79',
  header_image: 'https://steamcdn-a.akamaihd.net/steam/apps/269430/header.jpg?t=1447359765',background: 'https://steamcdn-a.akamaihd.net/steam/apps/269430/page_bg_generated_v6b.jpg?t=1447359765',
  short_description: '"He got close a few times'}
    
  ];

  getdesc(){
      for(let i=0;i<this.games.length;i++){
        if(this.games[i].appid==this.appid){
          let url1=this.games[i].header_image;
          let price=this.games[i].price;
          this.price=price;
          this.url=url1;
        }
      }
      var url1 = "url";
      this.selectedCart[url1]=this.url;
      console.log(this.selectedCart);
      console.log(this.url);
  }

  Addtocart(){

  }

}
