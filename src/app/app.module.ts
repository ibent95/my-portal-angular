// Angular and other libraries
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { LuxonModule } from 'luxon-angular';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faFacebook as fabFacebook,
  faGithub as fabGithub,
  faMedium as fabMedium,
  faWordpress as fabWordpress,
  faBlogger as fabBlogger,
} from '@fortawesome/free-brands-svg-icons';

// App configs
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CONFIG, ENV } from './app.config';
import { MaterialModule } from './material/material.module';

// Module components
import { ServicesApisComponent } from './modules/services-apis/services-apis.component';
import { DynamicFormServiceApiInSymfonyComponent } from './modules/services-apis/dynamic-form-service-api-in-symfony/dynamic-form-service-api-in-symfony.component';
import { DynamicFormServiceApiInLumenComponent } from './modules/services-apis/dynamic-form-service-api-in-lumen/dynamic-form-service-api-in-lumen.component';

// Shared components
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { DynamicFormServiceApiInSpringbootComponent } from './modules/services-apis/dynamic-form-service-api-in-springboot/dynamic-form-service-api-in-springboot.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ServicesApisComponent,
    BreadcrumbComponent,
    DynamicFormServiceApiInSymfonyComponent,
    DynamicFormServiceApiInLumenComponent,
    DynamicFormServiceApiInSpringbootComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LuxonModule,
    CarouselModule,
    MatIconModule,
    FontAwesomeModule,
    MaterialModule,
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
