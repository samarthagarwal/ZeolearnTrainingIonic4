import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";

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

  color_name: string = "primary";

  user: any = {
    username: "",
    designation: "developer",
    accepted: false,
    favoriteColor: ""
  }

  designations: any [] = ["Developer", "Manager", "Teacher"];

  constructor(private router: Router) {
    
  }

  // ionViewDidEnter() {
  //   document.querySelector('#mySelect').shadowRoot.querySelector('.select-text').setAttribute('style', 'white-space:normal');
  // }

  ionViewDidEnter() {
    console.log("ionViewDidEnter Home Page");
  }

  navigate() {
    this.router.navigate(["/office"]);
  }

  onClicked(user: any) {
    console.log(user);
  }

}
