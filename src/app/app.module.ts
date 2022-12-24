import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { LuxonModule } from 'luxon-angular';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faFacebook as fabFacebook,
  faGithub as fabGithub,
  faMedium as fabMedium,
  faWordpress as fabWordpress,
  faBlogger as fabBlogger,
} from '@fortawesome/free-brands-svg-icons';
import { AppComponent } from './app.component';
import { CONFIG, ENV } from './app.config';

// Shared
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './modules/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeAppsSliderComponent } from './modules/home/home-apps-slider/home-apps-slider.component';
import { ServiceAPIListComponent } from './modules/home/service-api-list/service-api-list.component';
import { AppListComponent } from './modules/home/app-list/app-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    HomeAppsSliderComponent,
    ServiceAPIListComponent,
    AppListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MaterialModule,
    MatIconModule,
    LuxonModule,
    HttpClientModule,
    FontAwesomeModule,
    CarouselModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'id-ID' },
    { provide: MAT_DATE_LOCALE, useValue: 'id-ID' },
    { provide: ENV, useValue: CONFIG },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      fabFacebook,
      fabBlogger,
      fabGithub,
      fabWordpress,
      fabMedium,
    );
  }
}
