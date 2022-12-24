import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-slider',
  templateUrl: './app-slider.component.html',
  styleUrls: ['./app-slider.component.scss']
})
export class AppsSliderComponent implements OnInit {

  isNoPause!: boolean;
  isAnimated!: boolean;
  interval!: number;

  constructor() { }

  ngOnInit(): void {
    this.isNoPause = false;
    this.isAnimated = true;
    this.interval = 4000;
  }

}
