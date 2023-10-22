import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'my-portal-services-apis',
  templateUrl: './services-apis.component.html',
  styleUrls: ['./services-apis.component.scss']
})
export class ServicesApisComponent implements OnInit {

  data!: any;

  isPageLoading!: boolean;

  constructor(
    private location: Location,
    private dataSvc: DataService,
  ) { }

  ngOnInit(): void {
    this.isPageLoading = true;
    this.data = this.dataSvc.getData();

    if (this.data) {
      this.isPageLoading = false;
    } else {
      this.location.back();
    }
  }

}
