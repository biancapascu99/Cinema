import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './data.service';
import { Reservation } from './interfaces';
import { SeatCard } from './seat-card/seat-card';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservation: Reservation;
  id: number;
  maxSeats: boolean = false;
  seatCards: SeatCard[] = [];

  chosenSeats = [];

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.readScreening(this.id);
    })

  }

  readScreening(id: number) {
    this.dataService.readReservation(id).subscribe((data: any) => {
      let seats: number[] = [];
      for (let screening of data) {
        seats.push(screening.ticket_seat)
      }
      this.reservation = {
        title: data[0].movie_title,
        time: data[0].screening_date,
        roomNumber: data[0].RoomId,
        roomCapacity: data[0].room_capacity,
        reservedSeats: seats,
        projectorType: data[0].projector_type
      }
      this.displaySeats(this.reservation.roomCapacity, this.reservation.reservedSeats)
    })

  }

  onClickedSeat(seatNumber: number) {
    const index = this.chosenSeats.indexOf(seatNumber);
    if (index > -1) {
      this.chosenSeats.splice(index, 1)
    } else {
      this.chosenSeats.push(seatNumber)
    }

  }

  displaySeats(capacity: number, reservedSeats: number[]) {
    for (let i = 1; i <= capacity; i++) {
      this.seatCards.push({ reserved: reservedSeats.includes(i), clicked: false, seatNumber: i })
    }
  }

  createReservation() {
    let newTicket: any = { userId: 1, screeningId: this.id, tickets: this.chosenSeats }
    this.dataService.createReservation(newTicket).subscribe((response) => { })
  }
}
