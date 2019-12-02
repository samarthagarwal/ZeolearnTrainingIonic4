import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  people: any[] = [];
  API_KEY: string = "";
  CITY_NAME: string = "New Delhi";

  constructor(private http: HttpClient) {

    // this.http.get("http://www.json-generator.com/api/json/get/cepYMQaZqq?indent=2").toPromise().then((data: any[]) => {
    //   console.log(data)
    //   this.people = data;
    // })

    this.http.get("http://api.openweathermap.org/data/2.5/weather?q=" + this.CITY_NAME + "&appid=" + this.API_KEY).toPromise().then((data) => {
      console.log(data);
    })

  }
}
