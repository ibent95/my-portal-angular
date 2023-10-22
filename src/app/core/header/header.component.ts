import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'my-portal-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  baseUrl!: string;

  constructor() { }

  ngOnInit(): void {
    this.baseUrl = environment.baseUrl;
  }

  public onToggleMenu(): void {
    console.log('onToggleMenu');
  }

}
