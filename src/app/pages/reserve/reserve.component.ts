import { Component, OnInit } from '@angular/core';
import { SeatCard } from '../../body/seat-card/seat-card';


@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

  seatCards:SeatCard[] = [
    {reserve: false,clicked: false,numberSeat: 10},
    {reserve: false,clicked: false,numberSeat: 11},
    {reserve: true,clicked: true,numberSeat: 12},
    {reserve: false,clicked: false,numberSeat: 13},
    {reserve: false,clicked: false,numberSeat: 14},
    {reserve: false,clicked: false,numberSeat: 15},
    {reserve: false,clicked: false,numberSeat: 16},
    {reserve: true,clicked: true,numberSeat: 17},
    {reserve: false,clicked: false,numberSeat: 18},
    {reserve: false,clicked: false,numberSeat: 19}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
