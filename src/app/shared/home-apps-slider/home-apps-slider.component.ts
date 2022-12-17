import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-apps-slider',
  templateUrl: './home-apps-slider.component.html',
  styleUrls: ['./home-apps-slider.component.scss']
})
export class HomeAppsSliderComponent implements OnInit {

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
