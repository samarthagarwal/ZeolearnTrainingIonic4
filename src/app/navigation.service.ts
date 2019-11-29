import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  id: string;

  constructor() { }

  setId(id: string) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

}
