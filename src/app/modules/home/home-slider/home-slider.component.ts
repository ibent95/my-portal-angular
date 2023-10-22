import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-portal-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

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
