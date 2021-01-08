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
    const token = localStorage.getItem('token');
    const id = JSON.parse(atob(token.split('.')[1]))._id
    this.showTickets(id)
  }

  showTickets(id: number) {
    this.dataService.showTickets(id).subscribe((data: any) => {
      this.tickets = data
    })
  }

}
