import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";
import { LoadingController, ToastController, AlertController, ActionSheetController, ModalController, PopoverController } from '@ionic/angular';
import { NavigationService } from '../navigation.service';
import { OfficePage } from '../office/office.page';
import { OverflowPage } from '../overflow/overflow.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  people: any[] = [{
    "id": 1,
    "first_name": "Anatola",
    "last_name": "Sea",
    "email": "asea0@narod.ru",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.png/cc0000/ffffff"
  }, {
    "id": 2,
    "first_name": "Matthieu",
    "last_name": "Duffet",
    "email": "mduffet1@census.gov",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 3,
    "first_name": "Jacki",
    "last_name": "Cooch",
    "email": "jcooch2@who.int",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 4,
    "first_name": "Pyotr",
    "last_name": "Pargiter",
    "email": "ppargiter3@geocities.jp",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/cc0000/ffffff"
  }, {
    "id": 5,
    "first_name": "Felecia",
    "last_name": "Rosnau",
    "email": "frosnau4@spiegel.de",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.png/dddddd/000000"
  }, {
    "id": 6,
    "first_name": "Steward",
    "last_name": "Crisell",
    "email": "scrisell5@wikipedia.org",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/dddddd/000000"
  }, {
    "id": 7,
    "first_name": "Gray",
    "last_name": "Hudleston",
    "email": "ghudleston6@behance.net",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 8,
    "first_name": "Derrik",
    "last_name": "Garratty",
    "email": "dgarratty7@china.com.cn",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 9,
    "first_name": "Brose",
    "last_name": "Fonso",
    "email": "bfonso8@blogspot.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 10,
    "first_name": "Evelyn",
    "last_name": "Wait",
    "email": "ewait9@cloudflare.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
  }, {
    "id": 11,
    "first_name": "Hi",
    "last_name": "Hesse",
    "email": "hhessea@jugem.jp",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/ff4444/ffffff"
  }, {
    "id": 12,
    "first_name": "Esdras",
    "last_name": "Sewards",
    "email": "esewardsb@csmonitor.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/ff4444/ffffff"
  }, {
    "id": 13,
    "first_name": "Anneliese",
    "last_name": "Gunny",
    "email": "agunnyc@google.fr",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 14,
    "first_name": "Robb",
    "last_name": "Poyser",
    "email": "rpoyserd@yahoo.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.bmp/cc0000/ffffff"
  }, {
    "id": 15,
    "first_name": "Toiboid",
    "last_name": "Matz",
    "email": "tmatze@google.es",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
  }, {
    "id": 16,
    "first_name": "Ambrosi",
    "last_name": "Amoss",
    "email": "aamossf@foxnews.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 17,
    "first_name": "Olwen",
    "last_name": "Comber",
    "email": "ocomberg@wikispaces.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.bmp/5fa2dd/ffffff"
  }, {
    "id": 18,
    "first_name": "Faber",
    "last_name": "Gallacher",
    "email": "fgallacherh@bloomberg.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.bmp/dddddd/000000"
  }, {
    "id": 19,
    "first_name": "Maryjo",
    "last_name": "Underhill",
    "email": "munderhilli@stumbleupon.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.bmp/5fa2dd/ffffff"
  }, {
    "id": 20,
    "first_name": "Addison",
    "last_name": "Speedin",
    "email": "aspeedinj@google.com.au",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  }, {
    "id": 21,
    "first_name": "Morie",
    "last_name": "Creany",
    "email": "mcreanyk@photobucket.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  }, {
    "id": 22,
    "first_name": "Pepi",
    "last_name": "Tomalin",
    "email": "ptomalinl@nba.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.bmp/ff4444/ffffff"
  }, {
    "id": 23,
    "first_name": "Maryanna",
    "last_name": "Beadle",
    "email": "mbeadlem@mtv.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
  }, {
    "id": 24,
    "first_name": "Jeffy",
    "last_name": "Tille",
    "email": "jtillen@nydailynews.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/dddddd/000000"
  }, {
    "id": 25,
    "first_name": "Mathe",
    "last_name": "Spry",
    "email": "mspryo@geocities.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/cc0000/ffffff"
  }, {
    "id": 26,
    "first_name": "Dorthea",
    "last_name": "Mendel",
    "email": "dmendelp@so-net.ne.jp",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 27,
    "first_name": "Yorgo",
    "last_name": "Aitchinson",
    "email": "yaitchinsonq@phoca.cz",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
  }, {
    "id": 28,
    "first_name": "Milka",
    "last_name": "Mancktelow",
    "email": "mmancktelowr@so-net.ne.jp",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.bmp/5fa2dd/ffffff"
  }, {
    "id": 29,
    "first_name": "Engelbert",
    "last_name": "Pingston",
    "email": "epingstons@java.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.jpg/ff4444/ffffff"
  }, {
    "id": 30,
    "first_name": "Melisse",
    "last_name": "Tomlins",
    "email": "mtomlinst@shinystat.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 31,
    "first_name": "Gus",
    "last_name": "Stable",
    "email": "gstableu@umich.edu",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.bmp/ff4444/ffffff"
  }, {
    "id": 32,
    "first_name": "Appolonia",
    "last_name": "Kyme",
    "email": "akymev@acquirethisname.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 33,
    "first_name": "Reg",
    "last_name": "Rassmann",
    "email": "rrassmannw@sohu.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/cc0000/ffffff"
  }, {
    "id": 34,
    "first_name": "Yankee",
    "last_name": "Dayborne",
    "email": "ydaybornex@wikimedia.org",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  }, {
    "id": 35,
    "first_name": "Gill",
    "last_name": "Perchard",
    "email": "gperchardy@topsy.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
  }, {
    "id": 36,
    "first_name": "Mariel",
    "last_name": "Kofax",
    "email": "mkofaxz@addtoany.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.png/dddddd/000000"
  }, {
    "id": 37,
    "first_name": "Pansy",
    "last_name": "Bendall",
    "email": "pbendall10@shutterfly.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.bmp/ff4444/ffffff"
  }, {
    "id": 38,
    "first_name": "Lambert",
    "last_name": "Bracegirdle",
    "email": "lbracegirdle11@noaa.gov",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.bmp/cc0000/ffffff"
  }, {
    "id": 39,
    "first_name": "Maribelle",
    "last_name": "Ianitti",
    "email": "mianitti12@histats.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.jpg/ff4444/ffffff"
  }, {
    "id": 40,
    "first_name": "Karlens",
    "last_name": "Lockett",
    "email": "klockett13@cmu.edu",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/dddddd/000000"
  }, {
    "id": 41,
    "first_name": "Frederica",
    "last_name": "MacAllan",
    "email": "fmacallan14@economist.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.jpg/ff4444/ffffff"
  }, {
    "id": 42,
    "first_name": "Renard",
    "last_name": "Tomlins",
    "email": "rtomlins15@about.me",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.bmp/cc0000/ffffff"
  }, {
    "id": 43,
    "first_name": "Remington",
    "last_name": "Downing",
    "email": "rdowning16@macromedia.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.bmp/dddddd/000000"
  }, {
    "id": 44,
    "first_name": "Rhody",
    "last_name": "Sherewood",
    "email": "rsherewood17@wired.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.bmp/5fa2dd/ffffff"
  }, {
    "id": 45,
    "first_name": "Victoir",
    "last_name": "Haldenby",
    "email": "vhaldenby18@webs.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.bmp/dddddd/000000"
  }, {
    "id": 46,
    "first_name": "Nickolas",
    "last_name": "Gallen",
    "email": "ngallen19@imdb.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.bmp/cc0000/ffffff"
  }, {
    "id": 47,
    "first_name": "Merridie",
    "last_name": "Sartin",
    "email": "msartin1a@xinhuanet.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 48,
    "first_name": "Bobbette",
    "last_name": "Waterworth",
    "email": "bwaterworth1b@accuweather.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.png/cc0000/ffffff"
  }, {
    "id": 49,
    "first_name": "Jarad",
    "last_name": "Pilkington",
    "email": "jpilkington1c@mit.edu",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
  }, {
    "id": 50,
    "first_name": "Krisha",
    "last_name": "Theobald",
    "email": "ktheobald1d@mayoclinic.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/dddddd/000000"
  }];

  peopleBackup: any[] = [{
    "id": 1,
    "first_name": "Anatola",
    "last_name": "Sea",
    "email": "asea0@narod.ru",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.png/cc0000/ffffff"
  }, {
    "id": 2,
    "first_name": "Matthieu",
    "last_name": "Duffet",
    "email": "mduffet1@census.gov",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 3,
    "first_name": "Jacki",
    "last_name": "Cooch",
    "email": "jcooch2@who.int",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 4,
    "first_name": "Pyotr",
    "last_name": "Pargiter",
    "email": "ppargiter3@geocities.jp",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/cc0000/ffffff"
  }, {
    "id": 5,
    "first_name": "Felecia",
    "last_name": "Rosnau",
    "email": "frosnau4@spiegel.de",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.png/dddddd/000000"
  }, {
    "id": 6,
    "first_name": "Steward",
    "last_name": "Crisell",
    "email": "scrisell5@wikipedia.org",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/dddddd/000000"
  }, {
    "id": 7,
    "first_name": "Gray",
    "last_name": "Hudleston",
    "email": "ghudleston6@behance.net",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 8,
    "first_name": "Derrik",
    "last_name": "Garratty",
    "email": "dgarratty7@china.com.cn",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 9,
    "first_name": "Brose",
    "last_name": "Fonso",
    "email": "bfonso8@blogspot.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 10,
    "first_name": "Evelyn",
    "last_name": "Wait",
    "email": "ewait9@cloudflare.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
  }, {
    "id": 11,
    "first_name": "Hi",
    "last_name": "Hesse",
    "email": "hhessea@jugem.jp",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/ff4444/ffffff"
  }, {
    "id": 12,
    "first_name": "Esdras",
    "last_name": "Sewards",
    "email": "esewardsb@csmonitor.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/ff4444/ffffff"
  }, {
    "id": 13,
    "first_name": "Anneliese",
    "last_name": "Gunny",
    "email": "agunnyc@google.fr",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 14,
    "first_name": "Robb",
    "last_name": "Poyser",
    "email": "rpoyserd@yahoo.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.bmp/cc0000/ffffff"
  }, {
    "id": 15,
    "first_name": "Toiboid",
    "last_name": "Matz",
    "email": "tmatze@google.es",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
  }, {
    "id": 16,
    "first_name": "Ambrosi",
    "last_name": "Amoss",
    "email": "aamossf@foxnews.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
  }, {
    "id": 17,
    "first_name": "Olwen",
    "last_name": "Comber",
    "email": "ocomberg@wikispaces.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.bmp/5fa2dd/ffffff"
  }, {
    "id": 18,
    "first_name": "Faber",
    "last_name": "Gallacher",
    "email": "fgallacherh@bloomberg.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.bmp/dddddd/000000"
  }, {
    "id": 19,
    "first_name": "Maryjo",
    "last_name": "Underhill",
    "email": "munderhilli@stumbleupon.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.bmp/5fa2dd/ffffff"
  }, {
    "id": 20,
    "first_name": "Addison",
    "last_name": "Speedin",
    "email": "aspeedinj@google.com.au",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  }, {
    "id": 21,
    "first_name": "Morie",
    "last_name": "Creany",
    "email": "mcreanyk@photobucket.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  }, {
    "id": 22,
    "first_name": "Pepi",
    "last_name": "Tomalin",
    "email": "ptomalinl@nba.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.bmp/ff4444/ffffff"
  }, {
    "id": 23,
    "first_name": "Maryanna",
    "last_name": "Beadle",
    "email": "mbeadlem@mtv.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
  }, {
    "id": 24,
    "first_name": "Jeffy",
    "last_name": "Tille",
    "email": "jtillen@nydailynews.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/dddddd/000000"
  }, {
    "id": 25,
    "first_name": "Mathe",
    "last_name": "Spry",
    "email": "mspryo@geocities.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/cc0000/ffffff"
  }, {
    "id": 26,
    "first_name": "Dorthea",
    "last_name": "Mendel",
    "email": "dmendelp@so-net.ne.jp",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 27,
    "first_name": "Yorgo",
    "last_name": "Aitchinson",
    "email": "yaitchinsonq@phoca.cz",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
  }, {
    "id": 28,
    "first_name": "Milka",
    "last_name": "Mancktelow",
    "email": "mmancktelowr@so-net.ne.jp",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.bmp/5fa2dd/ffffff"
  }, {
    "id": 29,
    "first_name": "Engelbert",
    "last_name": "Pingston",
    "email": "epingstons@java.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.jpg/ff4444/ffffff"
  }, {
    "id": 30,
    "first_name": "Melisse",
    "last_name": "Tomlins",
    "email": "mtomlinst@shinystat.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 31,
    "first_name": "Gus",
    "last_name": "Stable",
    "email": "gstableu@umich.edu",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.bmp/ff4444/ffffff"
  }, {
    "id": 32,
    "first_name": "Appolonia",
    "last_name": "Kyme",
    "email": "akymev@acquirethisname.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 33,
    "first_name": "Reg",
    "last_name": "Rassmann",
    "email": "rrassmannw@sohu.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/cc0000/ffffff"
  }, {
    "id": 34,
    "first_name": "Yankee",
    "last_name": "Dayborne",
    "email": "ydaybornex@wikimedia.org",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
  }, {
    "id": 35,
    "first_name": "Gill",
    "last_name": "Perchard",
    "email": "gperchardy@topsy.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
  }, {
    "id": 36,
    "first_name": "Mariel",
    "last_name": "Kofax",
    "email": "mkofaxz@addtoany.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.png/dddddd/000000"
  }, {
    "id": 37,
    "first_name": "Pansy",
    "last_name": "Bendall",
    "email": "pbendall10@shutterfly.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.bmp/ff4444/ffffff"
  }, {
    "id": 38,
    "first_name": "Lambert",
    "last_name": "Bracegirdle",
    "email": "lbracegirdle11@noaa.gov",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.bmp/cc0000/ffffff"
  }, {
    "id": 39,
    "first_name": "Maribelle",
    "last_name": "Ianitti",
    "email": "mianitti12@histats.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.jpg/ff4444/ffffff"
  }, {
    "id": 40,
    "first_name": "Karlens",
    "last_name": "Lockett",
    "email": "klockett13@cmu.edu",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/dddddd/000000"
  }, {
    "id": 41,
    "first_name": "Frederica",
    "last_name": "MacAllan",
    "email": "fmacallan14@economist.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.jpg/ff4444/ffffff"
  }, {
    "id": 42,
    "first_name": "Renard",
    "last_name": "Tomlins",
    "email": "rtomlins15@about.me",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.bmp/cc0000/ffffff"
  }, {
    "id": 43,
    "first_name": "Remington",
    "last_name": "Downing",
    "email": "rdowning16@macromedia.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.bmp/dddddd/000000"
  }, {
    "id": 44,
    "first_name": "Rhody",
    "last_name": "Sherewood",
    "email": "rsherewood17@wired.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.bmp/5fa2dd/ffffff"
  }, {
    "id": 45,
    "first_name": "Victoir",
    "last_name": "Haldenby",
    "email": "vhaldenby18@webs.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.bmp/dddddd/000000"
  }, {
    "id": 46,
    "first_name": "Nickolas",
    "last_name": "Gallen",
    "email": "ngallen19@imdb.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.bmp/cc0000/ffffff"
  }, {
    "id": 47,
    "first_name": "Merridie",
    "last_name": "Sartin",
    "email": "msartin1a@xinhuanet.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.jpg/dddddd/000000"
  }, {
    "id": 48,
    "first_name": "Bobbette",
    "last_name": "Waterworth",
    "email": "bwaterworth1b@accuweather.com",
    "gender": "Female",
    "image_url": "http://dummyimage.com/100x100.png/cc0000/ffffff"
  }, {
    "id": 49,
    "first_name": "Jarad",
    "last_name": "Pilkington",
    "email": "jpilkington1c@mit.edu",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
  }, {
    "id": 50,
    "first_name": "Krisha",
    "last_name": "Theobald",
    "email": "ktheobald1d@mayoclinic.com",
    "gender": "Male",
    "image_url": "http://dummyimage.com/100x100.png/dddddd/000000"
  }];

  color_name: string = "primary";

  user: any = {
    username: "",
    designation: "developer",
    accepted: false,
    favoriteColor: ""
  }

  designations: any [] = ["Developer", "Manager", "Teacher"];

  constructor(private router: Router, private loadingCtrl: LoadingController, private toastCtrl: ToastController, private alertCtrl: AlertController, private actionSheetCtrl: ActionSheetController, private navService: NavigationService, private modalCtrl: ModalController, private popoverCtrl: PopoverController) {
    
  }

  // ionViewDidEnter() {
  //   document.querySelector('#mySelect').shadowRoot.querySelector('.select-text').setAttribute('style', 'white-space:normal');
  // }

  async showLoading() {

    let loading = await this.loadingCtrl.create({
      spinner: "dots",
      message: "Loading, please wait..."
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 5000)

  }

  async showToast() {

    let toast = await this.toastCtrl.create({
      message: "Creating new post...",
      showCloseButton: true,
      closeButtonText: "OK",
      position: "top"
    });

    toast.present();

  }

  async showAlert() {
    let alert = await this.alertCtrl.create({
      header: "Delete",
      subHeader: "Are you sure?",
      message: "This item will be deleted forever!",
      inputs: [{
        name: "developer",
        type: "checkbox",
        label: "Developer",
        value: "developer"
      }, {
        name: "jrdeveloper",
        type: "checkbox",
        label: "Jr. Developer",
        value: "jrdeveloper"
      }, {
        name: "manager",
        type: "checkbox",
        label: "Manager",
        value: "manager"
      }],
      buttons: [{
        text: "Cancel",
        handler: () => {
          console.log("User tapped on Cancel");
        }
      }, {
        text: "OK",
        handler: (data) => {

          console.log(data);

        }
      }]
    });

    alert.present();
  }

  async showActionSheet() {
    let actionSheet = await this.actionSheetCtrl.create({
      header: "Select Payment Mode",
      subHeader: "Please select any one of the following payment methods",
      buttons: [{
        text: "Credit Card",
        handler: () => {

        }
      }, {
        text: "Debit Card",
        handler: () => {
          
        }
      }, {
        text: "Bank transfer",
        handler: () => {
          
        }
      }]
    })

    actionSheet.present();
  }

  refreshMyList(event) {
    this.people = this.people.reverse();

    // Informs Ionic about refresh completion
    event.target.complete();
  }

  loadMore(event) {
    console.log("Loading more data...");
    this.people = this.people.concat(this.peopleBackup);

    setTimeout(() => {
      event.target.complete()
    }, 3000);

    if(this.people.length >= 200) {
      event.target.disabled = true;
    }
  }

  async gotoOffice(person) {

    // this.navService.setId(person.id);

    // this.router.navigate(['/office/']);

    let modal = await this.modalCtrl.create({
      component: OfficePage,
      componentProps: {
        "name": "Samarth Agarwal"
      }
    });

    modal.onDidDismiss().then((response) => {
      console.log("Modal was closed and we got");
      console.log(response.data.name);
    })

    modal.present();

  }

  async showOptions(ev) {

    console.log(ev);
    let popover = await this.popoverCtrl.create({
      component: OverflowPage,
      event: ev
    });

    popover.present();

  }

}
