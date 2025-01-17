import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-add-screening',
  templateUrl: './add-screening.component.html',
  styleUrls: ['./add-screening.component.css']
})
export class AddScreeningComponent implements OnInit {

  public id: number;
  public isEdit: boolean = false;
  public screeningDetails: any = {}
  public dataForEdit: any;
  public validationResult: { isError: boolean; message: string } = { isError: false, message: "" }
  public thisYear = (new Date()).getFullYear();

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id !== undefined) {
        this.isEdit = true
        this.readScreeningDetails(this.id);
      }
    })
  }

  addScreening() {

    const { roomId, movieId, date } = this.screeningDetails;

    const data = {
      roomId,
      movieId,
      date,
    }

    if (this.isEdit === false) {
    this.dataService.addScreening(data).subscribe((res) => {
      this.router.navigate(['/showScreening']);
    })}else {
      this.dataForEdit = {
        roomId: roomId,
        movieId: movieId,
        date: date,
        id: this.id
      }
      this.dataService.updateScreening(this.dataForEdit).subscribe((res) => {
        this.router.navigate(['/showScreening']);
      })
    }
  }

  readScreeningDetails(id: number) {
    this.dataService.readScreening(id).subscribe((data: any) => {
      this.screeningDetails = {
        roomId: data[0].RoomId,
        movieId: data[0].MovieId,
        date: `${data[0].screening_date.substring(0, 10)} ${data[0].screening_date.substring(11, 19)}`
      }
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
      this.validationResult = { isError: true, message: "Numărul sălii nu respectă formatul <aaaa>-<ll>-<zz> <hh>:<mm>:<ss>!" }
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
        this.validationResult = { isError: true, message: "Februarie nu poate să aibă mai mult de 29 de zile!" }
        return this.validationResult;
      }

      if (!(day >= 1 && day <= 31)) {
        this.validationResult = { isError: true, message: "Ziua trebuie să fie un număr cuprins între 1 și 31!" }
        return this.validationResult;
      }

      if (!(month >= 1 && month <= 12)) {
        this.validationResult = { isError: true, message: "Luna trebuie să fie un număr cuprins între 1 și 12!" }
        return this.validationResult;
      }

      if (!(year >= 1900 && year <= this.thisYear)) {
        this.validationResult = { isError: true, message: "Anul trebuie să fie un număr cuprins între 1900 și " + this.thisYear + "!"}
        return this.validationResult;
      }

      if (!(hour >= 7 && hour <= 23)) {
        this.validationResult = { isError: true, message: "Ora trebuie să fie un număr cuprins între 7 și 23!" }
        return this.validationResult;
      }

      if (!(minute >= 0 && minute <= 59)) {
        this.validationResult = { isError: true, message: "Minutele trebuie să fie un număr cuprins între 0 și 59!" }
        return this.validationResult;
      }

      if (!(second >= 0 && second <= 59)) {
        this.validationResult = { isError: true, message: "Secundele trebuie sa fie un număr cuprins între 0 și 59!" }
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
