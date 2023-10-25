import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatLegacyTable as MatTable, MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'my-portal-service-api-list',
  templateUrl: './service-api-list.component.html',
  styleUrls: ['./service-api-list.component.scss']
})
export class ServiceAPIListComponent implements OnInit, AfterViewInit {

  data!: Array<{
    uuid: string | null,
    service_code: string,
    service_name: string,
    status: string,
    link: string | null,
  }>;

  tableColumns!: string[];
  tableDataSource!: MatTableDataSource<typeof this.data[number]>;

  isPageLoading!: boolean;

  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  constructor(
    private router: Router,
    private dataSvc: DataService,
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
        service_code: 'dynamicFormSymfony',
        service_name: 'Dynamic forms service in Symfony',
        status: '[Done with on going updates]',
        link: '/services-apis',
      },
      {
        uuid: null,
        service_code: 'dynamicFormLumen',
        service_name: 'Dynamic forms service in Lumen',
        status: '[On going]',
        link: null,
      },
      {
        uuid: null,
        service_code: 'dynamicFormSpringBoot',
        service_name: 'Dynamic forms service in Spring Boot',
        status: '[Done with on going updates]',
        link: null,
      },
      {
        uuid: null,
        service_code: 'dynamicFormFlask',
        service_name: 'Dynamic forms service in Flask',
        status: '[Upcoming]',
        link: null,
      },
      {
        uuid: null,
        service_code: 'dynamicFormGo',
        service_name: 'Dynamic forms service in Go',
        status: '[Upcoming]',
        link: null,
      },
    ];

    this.tableDataSource.data = this.data;

    this.isPageLoading = false;
  }

  public onDynamicFormSvcLinkClick(data: typeof this.data[number]) {
    if (data.link) {
      this.dataSvc.setData(data);
      this.router.navigate([data.link]);
    }
  }

}
