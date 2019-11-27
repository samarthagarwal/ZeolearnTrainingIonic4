import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-office',
  templateUrl: './office.page.html',
  styleUrls: ['./office.page.scss'],
})
export class OfficePage {

  constructor() { }

  ionViewDidEnter() {
    console.log("ionViewDidEnter Office Page");
  }



}
