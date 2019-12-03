import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  people: any[] = [];
  API_KEY: string = "";
  CITY_NAME: string = "New Delhi";

  imageBase64URL: string;

  constructor(private http: HttpClient, private camera: Camera, private actionsheetCtrl: ActionSheetController) {


  }

  async showActionSheet() {
    let actionSheet = await this.actionsheetCtrl.create({
      header: "Choose source",
      buttons: [{
        icon: "camera",
        text: "Camera",
        handler: () => {
          this.launchCamera(1);
        }
      }, {
        icon: "images",
        text: "Gallery",
        handler: () => {
          this.launchCamera(0);
        }
      }]
    })

    actionSheet.present();
  }

  async launchCamera(sourceType: number) {
    
    let options: CameraOptions = {
      targetHeight: 400,
      targetWidth: 400,
      encodingType: 1,
      sourceType: sourceType,
      destinationType: 0,
      quality: 80
    }

    try { 
      let image = await this.camera.getPicture(options);
      console.log(image);
      this.imageBase64URL = "data:image/png;base64," + image;
    } catch {
      
      console.log("User canceled the flow!");

    }

  }
}
