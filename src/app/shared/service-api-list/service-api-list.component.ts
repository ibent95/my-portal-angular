import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-api-list',
  templateUrl: './service-api-list.component.html',
  styleUrls: ['./service-api-list.component.scss']
})
export class ServiceAPIListComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public onDynamicFormSvcLinkClick(index: number) {

    switch (index) {
      case 1:
        this.router.navigate(['/services-apis']);
        break;

      default:
        break;
    }
  }

}
