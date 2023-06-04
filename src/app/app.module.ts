import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FlightSearchComponent,
    FlightCardComponent,
    HomeComponent,
    PassengerSearchComponent,
    FlightEditComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
