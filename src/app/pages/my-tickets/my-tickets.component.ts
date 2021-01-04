import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.css']
})
export class MyTicketsComponent implements OnInit {

  tickets = []
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.showTickets()
  }

  showTickets() {
    this.dataService.showTickets().subscribe((data: any) => {
      this.tickets = data
      console.log(this.tickets)
    })
  }

}
