import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  a: number;

  constructor() {
    this.start();
  }

  

  async start() {
    console.log("Line 13")
    console.log("Long running task started...")

    // this.emulateLongTask()
    // .then(() => {
    //   console.log("Line 17")
    //   console.log(this.a);
    // })
    // .catch(() => {
    //   console.log("An error occured");
    // })
    // .finally(() => {
    //   console.log("Finally all done!");
    // })

    try {
      await this.emulateLongTask();

      console.log(this.a);
    } catch(ex) {
      console.log("An error occured");
    } finally {
      console.log("Finally all done!")
    }
  }

  emulateLongTask(): Promise<void> {
    return new Promise((resolve, reject) => {
      // resolve() // indicates successful completion of the job
      // reject() // indicates failed completion of the job

      setTimeout(() => {
        // long running task finished
        console.log("long running task finished");
        this.a = 45;
        resolve();
      }, 5000);
    })
  }

}
