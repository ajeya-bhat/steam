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
  xlabels=[`CAPCOM Co. Ltd.`, `CINEMAX s.r.o.`, `CINEMAX s.r.o.`, `CyberStep Inc.`, `Enlight Software Limited PerspectX`, `Jackbox Games Inc.`, `KOEI TECMO GAMES CO. LTD.`, `Nippon Ichi Software Inc.`, `Quicksilver Software Inc.`, `0Cube`, `10Ants Hill`, `1C Entertainment`, `3100 games`, `4HEAD Studios`, `A.M. Bosch`, `ACQUIRE Corp.`, `AFBIK Studio`, `Absolutist Ltd.`, `Afeel inc;Magic Cube`, `Alawar Entertainment`, `Alcateia Entertainment`, `Alone Games`, `Amaterasu Software`, `Ammon Beardmore`, `Andrew Chuprina`, `Andy Jurko`, `AngryAngelGames`, `Appmania`, `Armoured Beans`, `Artur Games;Music by Darkman007`, `Ascaron Entertainment ltd.`, `Assemble Entertainment`, `Aweswan studios`, `BANDAI NAMCO Studio Inc.`, `Bearded Bird Game Studio`, `Beavis Soft`, `Bedtime Phobias`, `Behaviour Interactive`, `BelleGames Ltd.`, `Bernackels`, `Big Ant Studios`, `Bigosaur`, `Binx Interactive;Croteam Incubator;Croteam`, `Black Phoenix Studio`, `Blue Entropy Studios`, `Blue Mammoth Games`, `Blue Sunset Games`, `Blue Volcano Studio in Blue Volcano Studio`, `Bogdan Sychkov`, `Boozer Game Studios`, `Brainwashing games`, `Bread Vision Studios LLC.`, `Bullid Games`, `CSM`, `CTN Design`, `Celusis`, `Cersgame Studios`, `Chris Danelon`, `Colorfiction`, `Convoy Games`, `Cosmillica`, `Crafty Studios`, `CreateVR`, `D1ONE`, `DDD Wares`, `Daedalic Entertainment`, `Dan  Walters;Ceri Williams`, `Desertkun`, `DigiFeather`, `Double Fine Productions`, `DrashVR LLC`, `Drixy Games`, `DuCats Games Studio`, `DyingCat`, `Dylan Latham`, `Eat Create Sleep`, `Egosoft`, `Eipix Entertainment`, `Electric Root`, `Endlessfluff Games`, `Eutechnyx`, `Evan Murray`, `Exsom`, `FIVE-BN GAMES`, `Fantasy Flight Games`, `Fast Travel Games`, `Faster Time Games Limited`, `Fazan`, `FireFly Studios`, `Flying Oak Games`, `Flyleap Studios`, `FomoonSoft`, `For Kids`, `Forrest Keel`, `FreakZone Games`, `FreezeNova`, `FrozenPepper S.R.L`, `Full Control Studios`, `Funny Twins`, `GATO STUDIO`, `Galvanic Games`, `Gamalocus Studios`, `Game in a Bottle`, `GameTop.com`, `Gameplay Studio VR`, `Goloso Games`, `Goober Games`, `Happy Polygon`, `Harrison Went`, `Hellmade Games`, `Hidden Path Entertainment`, `High Leap Studios`, `Humongous Entertainment`, `I Need Play`, `Ilya Gubin`, `IndieLip`, `Infinity Arc Studios`, `Ivanovich Games`, `Jehan Kobe Chang`, `Jeremy Gable`, `JoyBits Ltd.`, `KING Art`, `Kiddy`, `Koker_007`, `Kolapo Oni`, `Kongmeng Yang`, `Kristjan Skutta`, `Labory`, `Laush Dmitriy Sergeevich`, `Laush Studio`, `Lazylab Games`, `Le Faucheur Kevin`, `Lesley Dodd`, `Lion game Lion`, `Little Green Men Games`, `Lonely Boy Studio Inc.`, `Lucas Molina`, `Lunar Labs`, `LunarCitySeven`, `Machine 22`, `MadOut Games`, `Malfador Machinations`, `Mechanical Monocle`, `Mehan Games`, `Micro Revolution LLC`, `Might and Delight`, `Milkstone Studios`, `Mindillusion`, `Minosh Digital`, `MintBottle`, `MumboJumbo`, `MumboJumbo`, `Muse Games`, `N.R. Burnette`, `NIGORO`, `Nedodnb`, `Nekyau Games`, `Neopica`, `Nichengun`, `Nicolás Recabarren;Tomás Batista`, `Night Dreams Studio`, `Noumenon Games`, `NukGames`, `OmicGames`, `OnBlind`, `PSR Outdoors`, `Pandemic Studios`, `Parta Games Oy`, `Pastanaga Sideral`, `Peter Cleary`, `Peter Simmons`, `Phaser Lock Interactive`, `Pilgrim Adventures`, `Pixel Six Games`, `Pixel Star`, `Platine Dispositif`, `Poisson Rouge Interactica ltd`, `Polymorphic Games`, `Polynetix Studio`, `Prism Interactive Entertainment Inc.`, `Prologue Games`, `PyrofrogStudos`, `Q-Cumber Factory`, `Quail Island Software Limited`, `QuickSave`, `Quiet River`, `REEW GAMES`, `RSK Entertainment`, `Raconteur Games`, `Rahmat Nata Djaja`, `Razzart Visual`, `Realore`, `Rebellion`, `Red Dolphin Games`, `Red Fox Studio`, `Red Matter Studio`, `Reew Games`, `Relic`, `Rithm Gaming`, `RocketWerkz`, `S.Y. GAMES`, `SSCTEAM`, `Salty Dog Digital`, `Sandbox Interactive GmbH`, `Sayan`, `Seaven Studio`, `Secret Exit Ltd.`, `Section Studios`, `Seven Sails Games`, `Siberian Digital`, `SimaGames`, `SimppleGames`, `Sly`, `Sly`, `Software Geezers`, `Softwaves Mini`, `Special Bit`, `Spectrum Holobyte`, `Spiderweb Software`, `Strangely Interactive Ltd`, `Super Retro Duck`, `Sven Co-op Team`, `TEAM_ETS`, `TRI.G`, `Tap It Games;Bit Golem`, `Team Syukino`, `TechBridge Interactive`, `Telltale Games`, `The Farm 51`, `The Gentlebros;General Arcade`, `The Mill`, `Tigrido Inc`, `Tonguç Bodur`, `ToonTRAXX Studios`, `Toucan Studio`, `Trendy Entertainment`, `TripleBrick`, `Triumph Studios;Virtual Programming`, `Tyrone Hunt`, `Ubisoft Montpellier`, `Unknown Worlds Entertainment`, `Valve`, `Vibrant Core`, `Villainous  Games`, `Virtual Dor;Universidad de Almería`, `Vogelsap`, `Vyacheslav Shilikhin`, `Vyacheslav Shilikhin`, `WJLEGAME`, `Water Temple Studio`, `Wirtuel`, `Zilby`, `Zloy Krot Studio`, `eiNpictures`, `hallunazigames`, `hallunazigames`, `hede`, `iEntertainment Network Inc`, `iFun4All S.A.`, `inXile Entertainment`, `littleGigantic`, `meokigame`, `meokigame`, `rokapublish`, `tengenstudio`, `tomimar`, `waterxmelon`, `木子工坊`, `橘喵喵`, `橘喵喵`, `灰猫`];
  yvalues=[15.99,0.0,1.79,0.0,5.59,18.99,49.99,29.99,7.19,2.09,15.49,3.99,2.79,8.99,2.19,14.99,0.79,5.59,3.99,4.99,0.79,0.79,0.99,3.99,0.79,5.19,1.59,2.09,6.19,3.99,6.99,2.89,3.99,14.99,6.99,3.99,0.0,15.49,4.79,9.99,44.99,6.99,10.99,4.79,3.99,0.0,5.19,1.69,9.29,3.99,2.79,2.79,7.19,0.79,3.99,7.19,0.79,0.0,6.19,9.99,6.99,22.99,0.0,2.89,7.99,16.99,2.89,0.0,3.99,6.99,5.59,0.79,2.19,5.19,0.79,0.0,39.99,7.19,3.99,10.99,2.09,4.79,2.09,0.0,4.99,14.99,5.59,9.99,6.99,10.59,3.99,5.79,0.79,0.79,2.09,0.79,0.0,22.99,0.79,0.79,3.99,11.39,6.99,0.0,4.79,0.0,0.0,6.99,1.69,1.69,10.99,3.99,4.99,0.79,1.69,2.89,1.99,4.79,0.0,3.99,14.99,17.99,3.99,0.79,2.89,0.79,2.79,3.99,4.79,2.89,6.99,0.79,1.69,15.49,26.99,0.0,4.99,6.99,0.79,3.99,0.0,10.99,7.19,11.39,3.99,3.99,15.49,18.99,3.99,3.19,5.99,5.99,3.99,0.0,10.99,2.89,0.79,11.39,0.79,7.19,2.09,5.79,0.79,2.89,0.79,2.79,7.99,0.79,2.79,6.99,1.69,10.99,1.69,0.79,2.89,6.99,1.99,3.99,4.79,11.39,14.99,0.0,5.79,5.19,2.89,3.99,10.59,7.19,5.59,11.39,6.99,2.79,5.59,3.99,15.49,0.79,1.69,19.99,0.79,7.19,2.09,3.99,3.99,0.0,3.99,10.99,6.99,0.79,3.99,3.19,4.99,3.99,0.78,3.98,3.99,0.79,5.19,4.99,0.0,13.37,4.99,0.0,2.09,2.09,2.99,3.99,2.09,0.0,17.99,4.99,0.0,7.19,2.89,4.99,6.99,9.99,8.99,6.99,3.99,8.59,0.0,0.0,6.99,3.99,15.49,12.99,2.89,3.19,5.59,4.99,4.99,2.89,2.07,6.99,0.79,0.79,5.19,10.99,11.99,6.99,0.79,0.79,0.99,6.19,1.69,9.29,0.79,0.79,2.89,2.89,2.89];
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
