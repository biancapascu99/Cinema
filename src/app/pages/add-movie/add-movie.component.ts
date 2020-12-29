import { Component, OnInit } from '@angular/core';
import { MovieDetails } from '../details/interfaces';
import { DataService } from './data.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  public movieDetails: any = {}

  public data: MovieDetails

  constructor(private dataService: DataService) { }

  ngOnInit(): void { }

  addMovie() {
  
    const { title, year, duration, summary, type } = this.movieDetails;
   
    this.data = {
      title: title,
      year: year,
      summary: summary,
      type: type,
      duration: duration, 
    }

   
    this.dataService.addMovie(this.data).subscribe((res)=>{
      // to do redirectionare la filme adaugate
    })

  }

  isValid() {
    return !(this.movieDetails.title && this.movieDetails.year && this.movieDetails.duration && this.movieDetails.summary && this.movieDetails.type);
  }


}
