import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  public roomDetails: any = {}

  constructor(private dataService: DataService) { }

  ngOnInit(): void { }

  addRoom() {
    const { capacity, projectorType } = this.roomDetails;
    const data = {
     capacity,
     projectorType 
    }

    this.dataService.addRoom(data).subscribe((res)=>{
      // todo redirectionare
    })

  }

  isValid() {
    const { capacity, projectorType } = this.roomDetails;
    return !(capacity && projectorType);
  }


}



