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
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id=parseInt(this.route.snapshot.paramMap.get('appid'));
    console.log(id);
    this.appid=id;
  }

  games:any[]=[
    
  ];

  


}
