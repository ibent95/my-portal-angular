import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesApisComponent } from './modules/services-apis/services-apis.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/core/core.module').then(m => m.CoreModule)
  },
  {
    path: 'services-apis',
    component: ServicesApisComponent,
    children: [],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
