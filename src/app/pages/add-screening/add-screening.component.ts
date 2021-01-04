import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-add-screening',
  templateUrl: './add-screening.component.html',
  styleUrls: ['./add-screening.component.css']
})
export class AddScreeningComponent implements OnInit {

  public screeningDetails: any = {}
  validationResult: { isError: boolean; message: string } = { isError: false, message: "" }
  thisYear = (new Date()).getFullYear();

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void { }

  addScreening() {

    const { roomId, movieId, date } = this.screeningDetails;

    const data = {
      roomId,
      movieId,
      date,
    }
    console.log(data)
    this.dataService.addScreening(data).subscribe((res) => {
      this.router.navigate(['/showScreening']);
    })
  }

  // validari

  isValid() {
    const { roomId, movieId, date } = this.screeningDetails;
    return !(roomId && movieId && date && !this.validationResult.isError && this.isValidRoomId(roomId) && this.isValidMovieId(movieId));
  }

  // validare propie

  isValidDate(date: any): { isError: boolean; message: string } {
    let dateRegex = /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/;

    if (date === undefined) {
      this.validationResult = { isError: false, message: "" }
      return this.validationResult
    }

    if (!dateRegex.test(date)) {
      this.validationResult = { isError: true, message: "Numarul salii nu respecta forma <aaaa>-<ll>-<zz> <hh>:<mm>:<ss>." }
      return this.validationResult
    } else {
      let matches = date.match(dateRegex)
      var year = parseInt(matches[1], 10);
      var month = parseInt(matches[2], 10);
      var day = parseInt(matches[3], 10);
      var hour = parseInt(matches[4], 10);
      var minute = parseInt(matches[5], 10);
      var second = parseInt(matches[6], 10);

      if ((day > 29 && month === 2)) {
        this.validationResult = { isError: true, message: "Februarie nu poate sa aiba mai mult de 29 de zile." }
        return this.validationResult;
      }

      if (!(day >= 1 && day <= 31)) {
        this.validationResult = { isError: true, message: "Ziua trebuie sa fie un numar cuprins intre 1 si 31" }
        return this.validationResult;
      }

      if (!(month >= 1 && month <= 12)) {
        this.validationResult = { isError: true, message: "Luna trebuie sa fie un numar cuprins intre 1 si 12" }
        return this.validationResult;
      }

      if (!(year >= 1900 && year <= this.thisYear)) {
        this.validationResult = { isError: true, message: "Anul trebuie sa fie un numar cuprins intre 1900 si " + this.thisYear }
        return this.validationResult;
      }

      if (!(hour >= 7 && hour <= 23)) {
        this.validationResult = { isError: true, message: "Ora trebuie sa fie un numar cuprins intre 7 si 23" }
        return this.validationResult;
      }

      if (!(minute >= 0 && minute <= 59)) {
        this.validationResult = { isError: true, message: "Minutele trebuie sa fie un numar cuprins intre 0 si 59" }
        return this.validationResult;
      }

      if (!(second >= 0 && second <= 59)) {
        this.validationResult = { isError: true, message: "Secundele trebuie sa fie un numar cuprins intre 0 si 59" }
        return this.validationResult;
      }
    }

    this.validationResult = { isError: false, message: "" }
    return this.validationResult;
  }



  isValidRoomId(roomId: string) {
    let numberRegex = /^[0-9]*$/;
    if( roomId === undefined || numberRegex.test(roomId)) {
      return true
    }
       return false
  }

  isValidMovieId(movieId: string) {
    let numberRegex = /^[0-9]*$/;
    if( movieId === undefined || numberRegex.test(movieId)) {
      return true
    }
       return false
  }

}
