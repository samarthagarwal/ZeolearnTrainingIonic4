import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-office',
  templateUrl: './office.page.html',
  styleUrls: ['./office.page.scss'],
})
export class OfficePage {

  constructor(private activatedRoute: ActivatedRoute, private navService: NavigationService) {

    // let id = this.activatedRoute.snapshot.paramMap.get("id");
    let id = this.navService.getId();
    console.log(id);

  }



}
