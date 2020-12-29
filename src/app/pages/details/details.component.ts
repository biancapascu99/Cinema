import { Component, OnInit } from '@angular/core';
import { MovieDetails } from './interfaces';
import { DataService } from './data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movieDetails: MovieDetails;
  trailerURL: any;
  id: number;
  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.readMovieDetails(this.id);   
    })
  }
  readMovieDetails(id) {
      this.dataService.readMovieDetails(id).subscribe((data: any) => {
        this.movieDetails = {
          title: data[0].movie_title,
          year: data[0].movie_year,
          summary: data[0].movie_summary,
          type: data[0].movie_type,
          duration: data[0].movie_duration, 
        }
      })
    }



}
