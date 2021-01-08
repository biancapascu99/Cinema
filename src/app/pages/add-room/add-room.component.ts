import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  public id: number;
  public isEdit: boolean = false;
  public isDisable: boolean = false;
  public roomDetails: any = {};
  public dataForEdit: any;

  public validationResult: { isError: boolean; message: string } = { isError: false, message: "" };

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id !== undefined) {
        this.isEdit = true
        this.isDisable = true
        this.readRoomDetails(this.id);
      }
    })
  }

  addRoom() {
    const { number, capacity, projectorType } = this.roomDetails;
    const data = {
      number,
      capacity,
      projectorType
    }

    if (this.isEdit === false) {
      this.dataService.addRoom(data).subscribe((res) => {
        this.router.navigate(['/showRooms']);
      })
    } else {
      this.dataForEdit = {
        number: number,
        capacity: capacity,
        id: this.id
      }
      this.dataService.updateRoom(this.dataForEdit).subscribe((res) => {
        this.router.navigate(['/showRooms']);
      })
    }
  }

  readRoomDetails(id: number) {
    this.dataService.readRoom(id).subscribe((data: any) => {
      this.roomDetails = {
        number: data[0].room_name,
        capacity: data[0].room_capacity,
        projectorType: data[0].projector_type
      }
    })
  }

  //  validari
  isValid() {
    const { number, capacity, projectorType } = this.roomDetails;
    return !(number && capacity && projectorType && this.isValidCapacity(capacity) && !this.validationResult.isError);
  }

  isValidCapacity(capacity: number) {
    if (capacity === undefined || (Number.isInteger(Number(capacity)) && capacity >= 40 && capacity <= 220)) {
      return true
    }
    return false
  }

  // validarea mea

  isValidNumber(roomNumber: string, capacity: number): { isError: boolean; message: string } {

    let roomNumberRegex = /(S|M|L)-([0-9][0-9][0-9])$/;

    if (roomNumber === undefined) {
      this.validationResult = { isError: false, message: "" }
      return this.validationResult
    }

    if (!roomNumberRegex.test(roomNumber)) {
      this.validationResult = { isError: true, message: "Numărul sălii nu respectă formatul <dimensiune>-<XYZ> unde dimensiunea este S, M sau L, iar XYZ sunt cifre!" }
      return this.validationResult
    }

    let prefix = roomNumber[0]
    switch (prefix) {
      case 'S':
        if (!(capacity >= 40 && capacity < 100)) {
          this.validationResult = { isError: true, message: "Prefixul S este valabil pentru capacitați cuprinse între 40 și 99!" }
          return this.validationResult
        }
        break;
      case 'M':
        if (!(capacity >= 100 && capacity < 160)) {
          this.validationResult = { isError: true, message: "Prefixul M este valabil pentru capacități cuprinse între 100 și 159!" }
          return this.validationResult
        }
        break;
      case 'L':
        if (!(capacity >= 160 && capacity < 220)) {
          this.validationResult = { isError: true, message: "Prefixul M este valabil pentru capacități cuprinse între 160 și 219!" }
          return this.validationResult
        }
        break;
      default:
        break
    }
    this.validationResult = { isError: false, message: "" }
    return this.validationResult
  }


}



