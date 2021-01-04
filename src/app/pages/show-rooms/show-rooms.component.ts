import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-show-rooms',
  templateUrl: './show-rooms.component.html',
  styleUrls: ['./show-rooms.component.css']
})
export class ShowRoomsComponent implements OnInit {

  rooms = []
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.showRooms()
  }

  showRooms() {
    this.dataService.showRooms().subscribe((data: any) => {
      this.rooms = data
    })
  }

}
