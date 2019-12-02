import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../navigation.service';
import { NavParams, ModalController} from '@ionic/angular';

@Component({
  selector: 'app-office',
  templateUrl: './office.page.html',
  styleUrls: ['./office.page.scss'],
})
export class OfficePage {

  constructor(private activatedRoute: ActivatedRoute, private navService: NavigationService, private navParams: NavParams, private modalCtrl: ModalController) {

    // let id = this.activatedRoute.snapshot.paramMap.get("id");
    // let id = this.navService.getId();
    // console.log(id);

    let name = this.navParams.get("name");
    console.log(name);

  }

  close() {
    // close the modal from within the modal
    this.modalCtrl.dismiss({
      "name": "Harry"
    });
  }


}
