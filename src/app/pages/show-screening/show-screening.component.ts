import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../schedule/data.service';

@Component({
  selector: 'app-show-screening',
  templateUrl: './show-screening.component.html',
  styleUrls: ['./show-screening.component.css']
})
export class ShowScreeningComponent implements OnInit {

  screenings = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.readScreening();
  }

  readScreening() {
    this.dataService.readSchedule().subscribe((data: any[]) => {
      this.screenings = data
    })
  }

  deleteScreening(id:number){
    this.dataService.deleteScreening(id).subscribe((res)=>{
      window.location.reload();
    })
  }

  editScreening(id:number) {
    this.router.navigate([`/editScreening/${id}`]);
  }

}
