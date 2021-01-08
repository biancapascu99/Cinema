import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-show-rooms',
  templateUrl: './show-rooms.component.html',
  styleUrls: ['./show-rooms.component.css']
})
export class ShowRoomsComponent implements OnInit {

  rooms = []
  
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.showRooms()
  }

  showRooms() {
    this.dataService.showRooms().subscribe((data: any) => {
      this.rooms = data
    })
  }

  deleteRoom(id:number){
    this.dataService.deleteRoom(id).subscribe((res)=>{
      window.location.reload();
    })
   
  }
  
  editRoom(id:number) {
    this.router.navigate([`/editRoom/${id}`]);
  }

}
