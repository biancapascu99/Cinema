import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-seat-card',
  templateUrl: './seat-card.component.html',
  styleUrls: ['./seat-card.component.css']
})

export class SeatCardComponent implements OnInit {

  @Input() reserved:boolean;
  @Input() clicked:boolean;
  @Input() seatNumber:number;
  @Output() clickedSeat = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  clickSeat(seatNumber:number){
    this.clicked = !this.clicked;
    this.clickedSeat.emit(seatNumber);  
  }
}
