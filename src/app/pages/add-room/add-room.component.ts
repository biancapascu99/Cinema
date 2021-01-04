import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  public roomDetails: any = {}

  validationResult: { isError: boolean; message: string } = { isError: false, message: "" }

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void { }

  addRoom() {
    const { number, capacity, projectorType } = this.roomDetails;
    const data = {
      number,
      capacity,
      projectorType
    }

    this.dataService.addRoom(data).subscribe((res) => {
      this.router.navigate(['/showRooms']);
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
      this.validationResult = { isError: true, message: "Numarul salii nu respecta forma <dimensiune>-<XYZ> unde dimensiunea este S, M sau L, iar XYZ sunt cifre" }
      return this.validationResult
    }

    let prefix = roomNumber[0]
    switch (prefix) {
      case 'S':
        if (!(capacity >= 40 && capacity < 100)) {
          this.validationResult = { isError: true, message: "Prefixul S este valabil pentru capacitati cuprinse intre 40 si 99." }
          return this.validationResult
        }
        break;
      case 'M':
        if (!(capacity >= 100 && capacity < 160)) {
          this.validationResult = { isError: true, message: "Prefixul M este valabil pentru capacitati cuprinse intre 100 si 159." }
          return this.validationResult
        }
        break;
      case 'L':
        if (!(capacity >= 160 && capacity < 220)) {
          this.validationResult = { isError: true, message: "Prefixul M este valabil pentru capacitati cuprinse intre 160 si 219." }
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



