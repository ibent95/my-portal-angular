import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'myp-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  routeHistory: string[] = [];

  constructor(
    public router: Router,
    private location: Location,
  ) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.routeHistory.push((event.urlAfterRedirects !== '/baseUrl') ? event.urlAfterRedirects : '/')
      }
    });

  }

  ngOnInit(): void { }

  public onBackButtonClick(): void {
    if (this.routeHistory.length > 0) {
      this.location.back();
    } else {
      this.router.navigate(['..']);
    }
  }

}
