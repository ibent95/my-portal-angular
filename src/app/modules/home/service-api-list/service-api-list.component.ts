import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-api-list',
  templateUrl: './service-api-list.component.html',
  styleUrls: ['./service-api-list.component.scss']
})
export class ServiceAPIListComponent implements OnInit, AfterViewInit {

  tableColumns!: string[];
  data!: Array<{
    uuid: string | null,
    service_name: string,
    status: string,
    link: string | null,
  }>;

  isPageLoading!: boolean;

  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isPageLoading = true;
    this.tableColumns = ['service_name', 'status', 'link'];
    this.data = [];

    this.retrieveServicesData();
  }

  ngAfterViewInit(): void {
    this.table.renderRows();
  }

  private retrieveServicesData() {
    this.data = [
      {
        uuid: null,
        service_name: 'Dynamic forms service in Symfony',
        status: '[On Going]',
        link: '/services-apis',
      },
      {
        uuid: null,
        service_name: 'Dynamic forms service in Lumen',
        status: '[Pending]',
        link: null,
      },
      {
        uuid: null,
        service_name: 'Dynamic forms service in Spring Boot',
        status: '[Upcoming]',
        link: null,
      },
      {
        uuid: null,
        service_name: 'Dynamic forms service in Flask',
        status: '[Upcoming]',
        link: null,
      },
      {
        uuid: null,
        service_name: 'Dynamic forms service in Go',
        status: '[Upcoming]',
        link: null,
      },
    ];

    this.isPageLoading = false;
  }

  public onDynamicFormSvcLinkClick(data: typeof this.data[number]) {
    if (data.link) this.router.navigate([data.link]);
  }

}
