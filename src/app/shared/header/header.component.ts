import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onToggleMenu(): void {
    console.log('onToggleMenu');

  }

}
