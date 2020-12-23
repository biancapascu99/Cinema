import { Component, OnInit } from '@angular/core';
import { SeatCard } from './seat-card/seat-card';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  seatCards: SeatCard[] = [
    { reserved: false, clicked: false, seatNumber: 10 },
    { reserved: false, clicked: false, seatNumber: 11 },
    { reserved: false, clicked: false, seatNumber: 12 },
    { reserved: false, clicked: false, seatNumber: 13 },
    { reserved: true, clicked: false, seatNumber: 14 },
    { reserved: false, clicked: false, seatNumber: 15 },
    { reserved: false, clicked: false, seatNumber: 16 },
    { reserved: false, clicked: false, seatNumber: 17 },
    { reserved: true, clicked: false, seatNumber: 18 },
    { reserved: false, clicked: false, seatNumber: 19 },
    { reserved: false, clicked: false, seatNumber: 10 },
    { reserved: false, clicked: false, seatNumber: 11 },
    { reserved: false, clicked: false, seatNumber: 12 },
    { reserved: false, clicked: false, seatNumber: 13 },
    { reserved: true, clicked: false, seatNumber: 14 },
    { reserved: false, clicked: false, seatNumber: 15 },
    { reserved: false, clicked: false, seatNumber: 16 },
    { reserved: false, clicked: false, seatNumber: 17 },
    { reserved: true, clicked: false, seatNumber: 18 },
    { reserved: false, clicked: false, seatNumber: 19 },
    { reserved: true, clicked: false, seatNumber: 18 },
    { reserved: false, clicked: false, seatNumber: 19 },
    { reserved: false, clicked: false, seatNumber: 10 },
    { reserved: false, clicked: false, seatNumber: 11 },
    { reserved: false, clicked: false, seatNumber: 12 },
    { reserved: false, clicked: false, seatNumber: 13 },
    { reserved: true, clicked: false, seatNumber: 14 },
    { reserved: false, clicked: false, seatNumber: 15 },
    { reserved: false, clicked: false, seatNumber: 16 },
    { reserved: false, clicked: false, seatNumber: 17 },
    { reserved: true, clicked: false, seatNumber: 18 },
    { reserved: false, clicked: false, seatNumber: 19 }
  ]

  chosenSeats = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClickedSeat(seatNumber: number) {
    console.log("In parinte am selectat: ", seatNumber)
    const index = this.chosenSeats.indexOf(seatNumber);
    if (index > -1) {
      this.chosenSeats.splice(index, 1)
    } else {
      this.chosenSeats.push(seatNumber)
    }
    console.log(this.chosenSeats)
  }

}
