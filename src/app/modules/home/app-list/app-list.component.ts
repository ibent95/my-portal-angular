import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'my-portal-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {

  data!: Array<{
    uuid: string | null,
    app_name: string,
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
    this.tableColumns = ['app_name', 'status', 'link'];
    this.data = [];
    this.tableDataSource = new MatTableDataSource(this.data);

    this.retrieveAppsData();
  }

  ngAfterViewInit(): void {
    this.table.renderRows();
  }

  private retrieveAppsData() {
    this.data = [
      {
        uuid: null,
        app_name: 'Dynamic forms apps in Angular',
        status: '[On Going]',
        link: 'http://dynamic-form-angular-seven.vercel.app',
      },
      {
        uuid: null,
        app_name: 'Dynamic forms apps in React/Next',
        status: '[Upcoming]',
        link: null,
      },
      {
        uuid: null,
        app_name: 'Dynamic forms apps in Vue/Nuxt',
        status: '[Upcoming]',
        link: null,
      },
    ];

    this.tableDataSource.data = this.data;

    this.isPageLoading = false;
  }

  public onAppLinkClick(data: typeof this.data[number]) {
    //if (data.link) this.router.navigate([data.link]);
  }

}
