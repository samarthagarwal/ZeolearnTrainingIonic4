import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  people: any[] = [{
    "name": "Samarth",
    "email": "samarth@something.com",
    "designation": "Developer",
    "allowDelete": true
  }, {
    "name": "Samarth",
    "email": "samarth@something.com",
    "designation": "Jr. Developer",
    "allowDelete": false
  },{
    "name": "Samarth",
    "email": "samarth@something.com",
    "designation": "Developer",
    "allowDelete": true
  },{
    "name": "Samarth",
    "email": "samarth@something.com",
    "designation": "Developer",
    "allowDelete": true
  },{
    "name": "Samarth",
    "email": "samarth@something.com",
    "designation": "Developer",
    "allowDelete": true
  },];

  constructor() {}

}
