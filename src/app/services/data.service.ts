import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: any;

  constructor() { }

  public setData(data: any) {
    this.data = data;
  }

  public getData(): typeof this.data {
    return this.data;
  }

}
