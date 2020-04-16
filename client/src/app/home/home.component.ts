import { Router ,RouterModule} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  
  urls:any[]=
  [{appid: `717000`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/717000/header.jpg?t=1511492408`},
  {appid: `269430`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/269430/header.jpg?t=1447359765`},
  {appid: `985930`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/985930/header.jpg?t=1549674371`},
  {appid: `639320`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/639320/header.jpg?t=1513939973`},
  {appid: `296490`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/296490/header.jpg?t=1511185831`},
  {appid: `250660`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/250660/header.jpg?t=1524153917`},
  {appid: `578310`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/578310/header.jpg?t=1551112027`},
  {appid: `419480`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/419480/header.jpg?t=1552734291`},
  {appid: `771530`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/771530/header.jpg?t=1552994625`},
  {appid: `800700`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/800700/header.jpg?t=1550087708`},
  {appid: `12330`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/12330/header.jpg?t=1447351239`},
  {appid: `65800`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/65800/header.jpg?t=1553796536`},
  {appid: `603150`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/603150/header.jpg?t=1546695274`},
  {appid: `569630`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/569630/header.jpg?t=1502930100`},
  {appid: `841010`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/841010/header.jpg?t=1525295945`},
  {appid: `878620`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/878620/header.jpg?t=1550595298`},
  {appid: `674890`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/674890/header.jpg?t=1545214791`},
  {appid: `450390`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/450390/header.jpg?t=1510766272`},
  {appid: `923730`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/923730/header.jpg?t=1541586019`},
  {appid: `444440`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/444440/header.jpg?t=1459443651`},
  {appid: `427510`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/427510/header.jpg?t=1459514980`},
  {appid: `619520`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/619520/header.jpg?t=1539674862`},
  {appid: `341550`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/341550/header.jpg?t=1478245167`},
  {appid: `298280`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/298280/header.jpg?t=1502849365`},
  {appid: `736810`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/736810/header.jpg?t=1521107167`},
  {appid: `376130`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/376130/header.jpg?t=1479307855`},
  {appid: `884770`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/884770/header.jpg?t=1530274878`},
  {appid: `878280`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/878280/header.jpg?t=1539981060`},
  {appid: `364900`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/364900/header.jpg?t=1509367859`},
  {appid: `742530`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/742530/header.jpg?t=1519564762`},
  {appid: `763970`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/763970/header.jpg?t=1542899851`},
  {appid: `631270`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/631270/header.jpg?t=1531438245`},
  {appid: `286790`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/286790/header.jpg?t=1452290188`},
  {appid: `625120`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/625120/header.jpg?t=1493934214`},
  {appid: `470170`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/470170/header.jpg?t=1490818412`},
  {appid: `380670`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/380670/header.jpg?t=1510949215`},
  {appid: `870100`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/870100/header.jpg?t=1540577394`},
  {appid: `371300`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/371300/header.jpg?t=1478619581`},
  {appid: `990250`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/990250/header.jpg?t=1545916986`},
  {appid: `972290`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/972290/header.jpg?t=1552611159`},
  {appid: `732140`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/732140/header.jpg?t=1516295623`},
  {appid: `715670`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/715670/header.jpg?t=1544842350`},
  {appid: `424060`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/424060/header.jpg?t=1449813811`},
  {appid: `369000`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/369000/header.jpg?t=1447374044`},
  {appid: `525740`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/525740/header.jpg?t=1479233212`},
  {appid: `1041400`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/1041400/header.jpg?t=1556163683`},
  {appid: `914350`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/914350/header.jpg?t=1538411814`},
  {appid: `291550`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/291550/header.jpg?t=1554907013`},
  {appid: `288710`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/288710/header.jpg?t=1498129061`},
  {appid: `949700`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/949700/header.jpg?t=1555068790`},
  {appid: `573340`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/573340/header.jpg?t=1528456421`},
  {appid: `620130`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/620130/header.jpg?t=1551658877`},
  {appid: `432490`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/432490/header.jpg?t=1547764629`},
  {appid: `526510`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/526510/header.jpg?t=1477769951`},
  {appid: `595150`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/595150/header.jpg?t=1536740739`},
  {appid: `913830`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/913830/header.jpg?t=1534937179`},
  {appid: `659820`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/659820/header.jpg?t=1547180802`},
  {appid: `357720`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/357720/header.jpg?t=1455730578`},
  {appid: `230700`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/230700/header.jpg?t=1545101858`},
  {appid: `1013070`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/1013070/header.jpg?t=1556484403`},
  {appid: `917200`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/917200/header.jpg?t=1555336562`},
  {appid: `314020`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/314020/header.jpg?t=1492976465`},
  {appid: `1057500`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/1057500/header.jpg?t=1556544113`},
  {appid: `792560`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/792560/header.jpg?t=1522253326`},
  {appid: `681900`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/681900/header.jpg?t=1506855208`},
  {appid: `448390`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/448390/header.jpg?t=1477455797`},
  {appid: `292410`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/292410/header.jpg?t=1530529947`},
  {appid: `353990`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/353990/header.jpg?t=1496255447`},
  {appid: `569770`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/569770/header.jpg?t=1545048030`},
  {appid: `341720`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/341720/header.jpg?t=1527495052`},
  {appid: `463930`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/463930/header.jpg?t=1481269431`},
  {appid: `626700`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/626700/header.jpg?t=1516994310`},
  {appid: `552660`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/552660/header.jpg?t=1487436334`},
  {appid: `606870`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/606870/header.jpg?t=1528726027`},
  {appid: `651120`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/651120/header.jpg?t=1548278008`},
  {appid: `552310`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/552310/header.jpg?t=1538116644`},
  {appid: `797090`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/797090/header.jpg?t=1518600150`},
  {appid: `499560`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/499560/header.jpg?t=1540817902`},
  {appid: `765950`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/765950/header.jpg?t=1516723187`},
  {appid: `358380`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/358380/header.jpg?t=1447371262`},
  {appid: `681070`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/681070/header.jpg?t=1504872252`},
  {appid: `341460`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/341460/header.jpg?t=1460161321`},
  {appid: `290490`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/290490/header.jpg?t=1467753758`},
  {appid: `317620`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/317620/header.jpg?t=1539673657`},
  {appid: `852080`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/852080/header.jpg?t=1526115001`},
  {appid: `939750`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/939750/header.jpg?t=1538184334`},
  {appid: `1003750`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/1003750/header.jpg?t=1550842148`},
  {appid: `748430`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/748430/header.jpg?t=1547380074`},
  {appid: `200990`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/200990/header.jpg?t=1447354715`},
  {appid: `699680`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/699680/header.jpg?t=1508603693`},
  {appid: `385490`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/385490/header.jpg?t=1450119915`},
  {appid: `890900`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/890900/header.jpg?t=1540379272`},
  {appid: `4520`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/4520/header.jpg?t=1533039072`},
  {appid: `757350`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/757350/header.jpg?t=1515749462`},
  {appid: `527960`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/527960/header.jpg?t=1531194598`},
  {appid: `724870`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/724870/header.jpg?t=1520159818`},
  {appid: `761890`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/761890/header.jpg?t=1555574333`},
  {appid: `729660`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/729660/header.jpg?t=1549300318`},
  {appid: `860650`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/860650/header.jpg?t=1547665587`},
  {appid: `746280`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/746280/header.jpg?t=1512138537`},
  {appid: `332700`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/332700/header.jpg?t=1525029721`},
  {appid: `552550`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/552550/header.jpg?t=1481644865`},
  {appid: `12710`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/12710/header.jpg?t=1469618484`},
  {appid: `1039470`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/1039470/header.jpg?t=1555107384`},
  {appid: `598090`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/598090/header.jpg?t=1487934440`},
  {appid: `399880`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/399880/header.jpg?t=1447377814`},
  {appid: `431960`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/431960/header.jpg?t=1543273391`},
  {appid: `698770`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/698770/header.jpg?t=1549571153`},
  {appid: `945440`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/945440/header.jpg?t=1551492072`},
  {appid: `708140`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/708140/header.jpg?t=1506453342`},
  {appid: `670500`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/670500/header.jpg?t=1502210456`},
  {appid: `525290`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/525290/header.jpg?t=1485942136`},
  {appid: `496460`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/496460/header.jpg?t=1505856506`},
  {appid: `524610`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/524610/header.jpg?t=1511112913`},
  {appid: `575820`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/575820/header.jpg?t=1532009818`},
  {appid: `301150`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/301150/header.jpg?t=1518597843`},
  {appid: `689750`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/689750/header.jpg?t=1502805092`},
  {appid: `416240`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/416240/header.jpg?t=1544467619`},
  {appid: `905150`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/905150/header.jpg?t=1547139243`},
  {appid: `938960`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/938960/header.jpg?t=1540333256`},
  {appid: `743420`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/743420/header.jpg?t=1522238871`},
  {appid: `725970`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/725970/header.jpg?t=1525191550`},
  {appid: `365620`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/365620/header.jpg?t=1555514552`},
  {appid: `887960`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/887960/header.jpg?t=1532361307`},
  {appid: `899180`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/899180/header.jpg?t=1542365570`},
  {appid: `737690`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/737690/header.jpg?t=1520190217`},
  {appid: `673950`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/673950/header.jpg?t=1552580561`},
  {appid: `791970`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/791970/header.jpg?t=1547181876`},
  {appid: `979720`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/979720/header.jpg?t=1556520769`},
  {appid: `718210`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/718210/header.jpg?t=1512466372`},
  {appid: `489050`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/489050/header.jpg?t=1466473359`},
  {appid: `763540`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/763540/header.jpg?t=1539738466`},
  {appid: `15920`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/15920/header.jpg?t=1447351186`},
  {appid: `342510`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/342510/header.jpg?t=1478024032`},
  {appid: `1014140`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/1014140/header.jpg?t=1551103393`},
  {appid: `878150`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/878150/header.jpg?t=1542591503`},
  {appid: `1006920`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/1006920/header.jpg?t=1547880424`},
  {appid: `1013940`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/1013940/header.jpg?t=1549453472`},
  {appid: `839560`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/839560/header.jpg?t=1524874054`},
  {appid: `225840`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/225840/header.jpg?t=1553967563`},
  {appid: `371530`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/371530/header.jpg?t=1487237169`},
  {appid: `788190`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/788190/header.jpg?t=1528880247`},
  {appid: `944380`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/944380/header.jpg?t=1538827731`},
  {appid: `670750`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/670750/header.jpg?t=1555148721`},
  {appid: `797330`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/797330/header.jpg?t=1520514672`},
  {appid: `939270`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/939270/header.jpg?t=1537952835`},
  {appid: `950160`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/950160/header.jpg?t=1549892999`},
  {appid: `860670`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/860670/header.jpg?t=1553638466`},
  {appid: `367010`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/367010/header.jpg?t=1478178738`},
  {appid: `694090`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/694090/header.jpg?t=1552091911`},
  {appid: `889040`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/889040/header.jpg?t=1545259733`},
  {appid: `845860`,header_image: `0-20000`},
  {appid: `937690`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/937690/header.jpg?t=1543574332`},
  {appid: `755950`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/755950/header.jpg?t=1554458730`},
  {appid: `350780`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/350780/header.jpg?t=1488463752`},
  {appid: `967210`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/967210/header.jpg?t=1545846926`},
  {appid: `936650`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/936650/header.jpg?t=1554170668`},
  {appid: `11230`,header_image: `50000-100000`},
  {appid: `493280`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/493280/header.jpg?t=1531606431`},
  {appid: `538330`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/538330/header.jpg?t=1533775637`},
  {appid: `899760`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/899760/header.jpg?t=1541233481`},
  {appid: `825310`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/825310/header.jpg?t=1556200533`},
  {appid: `791350`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/791350/header.jpg?t=1517929519`},
  {appid: `436530`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/436530/header.jpg?t=1538650998`},
  {appid: `848090`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/848090/header.jpg?t=1525685711`},
  {appid: `895550`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/895550/header.jpg?t=1533919313`},
  {appid: `468820`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/468820/header.jpg?t=1556327877`},
  {appid: `772740`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/772740/header.jpg?t=1529494867`},
  {appid: `1027990`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/1027990/header.jpg?t=1556229499`},
  {appid: `317730`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/317730/header.jpg?t=1518396894`},
  {appid: `209080`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/209080/header.jpg?t=1536787177`},
  {appid: `246090`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/246090/header.jpg?t=1479171211`},
  {appid: `286880`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/286880/header.jpg?t=1542758787`},
  {appid: `318230`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/318230/header.jpg?t=1545404123`},
  {appid: `953610`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/953610/header.jpg?t=1543063208`},
  {appid: `1022610`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/1022610/header.jpg?t=1550153186`},
  {appid: `713980`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/713980/header.jpg?t=1513323958`},
  {appid: `538060`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/538060/header.jpg?t=1508513276`},
  {appid: `495980`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/495980/header.jpg?t=1513936798`},
  {appid: `769440`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/769440/header.jpg?t=1539904395`},
  {appid: `414740`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/414740/header.jpg?t=1518429975`},
  {appid: `295850`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/295850/header.jpg?t=1447361508`},
  {appid: `488350`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/488350/header.jpg?t=1528835916`},
  {appid: `658260`,header_image: `0-20000`},
  {appid: `2520`,header_image: `50000-100000`},
  {appid: `819870`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/819870/header.jpg?t=1547467327`},
  {appid: `951420`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/951420/header.jpg?t=1550648902`},
  {appid: `259340`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/259340/header.jpg?t=1512666396`},
  {appid: `889720`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/889720/header.jpg?t=1550713784`},
  {appid: `589160`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/589160/header.jpg?t=1487242335`},
  {appid: `397460`,header_image: `200000-500000`},
  {appid: `375680`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/375680/header.jpg?t=1495360523`},
  {appid: `1036870`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/1036870/header.jpg?t=1553526186`},
  {appid: `852920`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/852920/header.jpg?t=1535811050`},
  {appid: `705740`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/705740/header.jpg?t=1541784246`},
  {appid: `600260`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/600260/header.jpg?t=1488414755`},
  {appid: `418360`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/418360/header.jpg?t=1548803463`},
  {appid: `288860`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/288860/header.jpg?t=1503309431`},
  {appid: `790050`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/790050/header.jpg?t=1519028667`},
  {appid: `221540`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/221540/header.jpg?t=1527182555`},
  {appid: `392160`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/392160/header.jpg?t=1551798864`},
  {appid: `959440`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/959440/header.jpg?t=1540372905`},
  {appid: `854870`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/854870/header.jpg?t=1533988019`},
  {appid: `779840`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/779840/header.jpg?t=1516294678`},
  {appid: `359250`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/359250/header.jpg?t=1536664173`},
  {appid: `400450`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/400450/header.jpg?t=1554296188`},
  {appid: `230820`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/230820/header.jpg?t=1524052332`},
  {appid: `363670`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/363670/header.jpg?t=1541187957`},
  {appid: `877910`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/877910/header.jpg?t=1532919465`},
  {appid: `33460`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/33460/header.jpg?t=1452181703`},
  {appid: `1025740`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/1025740/header.jpg?t=1554401726`},
  {appid: `603130`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/603130/header.jpg?t=1532104100`},
  {appid: `39520`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/39520/header.jpg?t=1533042210`},
  {appid: `466210`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/466210/header.jpg?t=1545122477`},
  {appid: `263760`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/263760/header.jpg?t=1478087736`},
  {appid: `340220`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/340220/header.jpg?t=1524262670`},
  {appid: `292260`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/292260/header.jpg?t=1554314859`},
  {appid: `736180`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/736180/header.jpg?t=1512744236`},
  {appid: `710160`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/710160/header.jpg?t=1529674691`},
  {appid: `586980`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/586980/header.jpg?t=1533530711`},
  {appid: `4900`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/4900/header.jpg?t=1513414875`},
  {appid: `1690`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/1690/header.jpg?t=1447350865`},
  {appid: `744450`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/744450/header.jpg?t=1535152851`},
  {appid: `622420`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/622420/header.jpg?t=1526502368`},
  {appid: `645480`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/645480/header.jpg?t=1498846386`},
  {appid: `760030`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/760030/header.jpg?t=1525678251`},
  {appid: `982900`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/982900/header.jpg?t=1553128106`},
  {appid: `688360`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/688360/header.jpg?t=1556380450`},
  {appid: `751220`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/751220/header.jpg?t=1556113441`},
  {appid: `850780`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/850780/header.jpg?t=1543326085`},
  {appid: `843890`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/843890/header.jpg?t=1525249519`},
  {appid: `661800`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/661800/header.jpg?t=1524326379`},
  {appid: `525500`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/525500/header.jpg?t=1546307483`},
  {appid: `535760`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/535760/header.jpg?t=1475876908`},
  {appid: `732980`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/732980/header.jpg?t=1509369698`},
  {appid: `554330`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/554330/header.jpg?t=1549278383`},
  {appid: `231330`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/231330/header.jpg?t=1493809138`},
  {appid: `236470`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/236470/header.jpg?t=1447357726`},
  {appid: `915020`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/915020/header.jpg?t=1541585458`},
  {appid: `801380`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/801380/header.jpg?t=1521062152`},
  {appid: `434700`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/434700/header.jpg?t=1456995696`},
  {appid: `252030`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/252030/header.jpg?t=1544621869`},
  {appid: `603120`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/603120/header.jpg?t=1537263273`},
  {appid: `8320`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/8320/header.jpg?t=1447351351`},
  {appid: `749200`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/749200/header.jpg?t=1520491602`},
  {appid: `367270`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/367270/header.jpg?t=1519520415`},
  {appid: `3710`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/3710/header.jpg?t=1478600057`},
  {appid: `545150`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/545150/header.jpg?t=1481291485`},
  {appid: `514920`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/514920/header.jpg?t=1545329882`},
  {appid: `692260`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/692260/header.jpg?t=1527705304`},
  {appid: `1025000`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/1025000/header.jpg?t=1552609794`},
  {appid: `308520`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/308520/header.jpg?t=1491494297`},
  {appid: `486300`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/486300/header.jpg?t=1465189495`},
  {appid: `928350`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/928350/header.jpg?t=1536774955`},
  {appid: `46360`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/46360/header.jpg?t=1553173146`},
  {appid: `486310`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/486310/header.jpg?t=1543511609`},
  {appid: `32110`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/32110/header.jpg?t=1447352269`},
  {appid: `41900`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/41900/header.jpg?t=1535045615`},
  {appid: `432540`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/432540/header.jpg?t=1534308575`},
  {appid: `732150`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/732150/header.jpg?t=1516911954`},
  {appid: `522210`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/522210/header.jpg?t=1553769753`},
  {appid: `527720`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/527720/header.jpg?t=1554892485`},
  {appid: `372830`,header_image: `https://steamcdn-a.akamaihd.net/steam/apps/372830/header.jpg?t=1465347100`}];


public rand:number=0;
public u1:string=`https://steamcdn-a.akamaihd.net/steam/apps/372830/header.jpg?t=1465347100`;
public u2:string=`https://steamcdn-a.akamaihd.net/steam/apps/732150/header.jpg?t=1516911954`;
public u3:string=`https://steamcdn-a.akamaihd.net/steam/apps/46360/header.jpg?t=1553173146`;
public uu1:Number=372830;
public uu2:Number=732150;
public uu3:Number=46360;

  ngOnInit(): void {
    setInterval(()=>this.refresh.call(this),30000);
  }

onsel(v){
  this.router.navigate(['/allgames',v]);
}

refresh(){
  var a= Math.floor(Math.random()*(250));
  var b=Math.floor(Math.random()*(250));
  var c=Math.floor(Math.random()*(250));
  if(a==b || a==c || b==c){
  b=a+2;
  c=b+2;}
  this.u1=this.urls[a].header_image;
  this.u2=this.urls[b].header_image;
  this.u3=this.urls[c].header_image;
  this.uu1=parseInt(this.urls[a].appid);
  this.uu2=parseInt(this.urls[b].appid);
  this.uu3=parseInt(this.urls[c].appid);
  console.log(this.uu1);
  console.log(this.uu3);
  console.log(this.uu2);
}

onallg(){
  this.router.navigate(['/allgames']);
}

}
