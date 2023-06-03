import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Flight } from '../model/flight';

type NumberBooleanDict = { [key: number]: boolean };

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
})
export class FlightSearchComponent implements OnInit {
  from = 'Hamburg';
  to = 'Graz';
  flights: Array<Flight> = [];
  selectedFlight: Flight | null = null;

  cart: NumberBooleanDict = {
    3: true,
    5: true,
  };

  // const inCart = this.cart[7]

  constructor(private flightService: FlightService) {}

  ngOnInit() {}

  search(): void {
    this.flightService.findFight(this.from, this.to).subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error: (err) => {
        console.error('Error', err);
      },
    });
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
