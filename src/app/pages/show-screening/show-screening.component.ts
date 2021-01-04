import { Component, OnInit } from '@angular/core';
import { DataService } from '../schedule/data.service';

@Component({
  selector: 'app-show-screening',
  templateUrl: './show-screening.component.html',
  styleUrls: ['./show-screening.component.css']
})
export class ShowScreeningComponent implements OnInit {

  screenings = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.readScreening();
  }

  readScreening() {
    this.dataService.readSchedule().subscribe((data: any[]) => {
      this.screenings = data
    })
  }

}
