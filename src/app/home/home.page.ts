import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string;

  constructor(private storage: Storage) {

    this.load();
    
  }

  async load() {
    this.storage.ready().then(async () => {
      // use storage safely

      this.username = await this.storage.get("username");
      console.log("Value loaded - " + this.username);

    })

  }

  async save() {
    if(this.username) {

      await this.storage.clear();
      await this.storage.set("username", this.username);
      console.log("Value saved successfully!");

    }
  }

}
