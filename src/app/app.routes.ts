import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';

export const APP_ROUTES: Routes = [
  {
    // Standardroute: redirect to '/home'
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'flight-search',
    component: FlightSearchComponent,
  },
  {
    path: 'passenger-search',
    component: PassengerSearchComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'flight-edit/:id',
    component: FlightEditComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
