import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  API_KEY: string = "53591a412c95932221df665561b01151";

  constructor(private http: HttpClient, private geolocation: Geolocation, private loadingCtrl: LoadingController) {

    this.getPosition();

  }

  async getPosition() {

    let loading = await this.loadingCtrl.create({
      message: "Getting weather info..."
    });

    loading.present();

    let options: GeolocationOptions = {
      maximumAge: 0,
      timeout: 10000,
      enableHighAccuracy: true
    }

    let position = await this.geolocation.getCurrentPosition(options);
    console.log(position);

    let response = await this.http.get("https://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=" + this.API_KEY).toPromise();

    loading.dismiss();

    console.log(response);

  }
}
