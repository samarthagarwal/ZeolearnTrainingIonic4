import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";
import { LoadingController, ToastController, AlertController, ActionSheetController } from '@ionic/angular';

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

  constructor(private router: Router, private loadingCtrl: LoadingController, private toastCtrl: ToastController, private alertCtrl: AlertController, private actionSheetCtrl: ActionSheetController) {
    
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

}
