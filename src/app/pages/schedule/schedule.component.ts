import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { MovieCard } from './interfaces';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedules = [];

  movieCards: MovieCard[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.readSchedule();
  }

  readSchedule() {
    this.dataService.readSchedule().subscribe((data: any[]) => {
      // console.log(data);
      for (let movieCard of data) {
        this.movieCards.push({
          movieId: movieCard.MovieId,
          screeningId: movieCard.ScreeningId,
          title: movieCard.movie_title,
          time: movieCard.screening_date,
          room: movieCard.RoomId
        })
      }
    })
  }

  filterByDay(dayOfWeek: number) {
    return this.movieCards.filter(movie =>
      new Date(Date.parse(movie.time) * 1000).getDay() === dayOfWeek
    )
  }


}
