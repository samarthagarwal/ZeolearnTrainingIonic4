import { Component } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  count: number = 0;
  temperature;

  constructor() {

    let myObservable = new Observable((observer) => {
      
      let interval = setInterval(() => {
        observer.next(Math.random());
        this.count++;

        if(this.count == 5) {
          clearInterval(interval);
          observer.complete();
        }

      }, 3000);
      
    })


    myObservable.subscribe((value) => {
      console.log(value);
      this.temperature = value;
    })



  }
}
