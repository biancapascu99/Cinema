import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat-card',
  templateUrl: './seat-card.component.html',
  styleUrls: ['./seat-card.component.css']
})

export class SeatCardComponent implements OnInit {

  @Input() reserve:boolean;
  @Input() clicked:boolean;
  @Input() numberSeat:number;

  constructor() { }

  ngOnInit(): void {
  }

  public reseveSeat(){
    this.clicked = true
    console.log(this.clicked)
  }
}
