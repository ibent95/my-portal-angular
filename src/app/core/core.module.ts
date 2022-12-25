// Angular and other libraries
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

// Core configs
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core-routing.module';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

// Module configs for home component
import { HomeComponent } from '../modules/home/home.component';
import { HomeSliderComponent } from '../modules/home/home-slider/home-slider.component';
import { ServiceAPIListComponent } from '../modules/home/service-api-list/service-api-list.component';
import { AppListComponent } from '../modules/home/app-list/app-list.component';

// Shared components
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    HomeSliderComponent,
    ServiceAPIListComponent,
    AppListComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule,
    CarouselModule,
    MatIconModule,
    FontAwesomeModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {
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
