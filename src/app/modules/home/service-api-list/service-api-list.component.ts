import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'myp-service-api-list',
  templateUrl: './service-api-list.component.html',
  styleUrls: ['./service-api-list.component.scss']
})
export class ServiceAPIListComponent implements OnInit, AfterViewInit {

  data!: Array<{
    uuid: string | null,
    service_name: string,
    status: string,
    link: string | null,
  }>;

  tableColumns!: string[];
  tableDataSource!: MatTableDataSource<typeof this.data[number]>;

  isPageLoading!: boolean;

  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isPageLoading = true;
    this.tableColumns = ['service_name', 'status', 'link'];
    this.data = [];
    this.tableDataSource = new MatTableDataSource(this.data);

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

    this.tableDataSource.data = this.data;

    this.isPageLoading = false;
  }

  public onDynamicFormSvcLinkClick(data: typeof this.data[number]) {
    if (data.link) this.router.navigate([data.link]);
  }

}
