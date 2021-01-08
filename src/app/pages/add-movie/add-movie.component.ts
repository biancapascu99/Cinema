import { Component, OnInit } from '@angular/core';
import { MovieDetails } from '../details/interfaces';
import { DataService } from './data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  public thisYear = (new Date()).getFullYear();
  public id: number
  public isEdit: boolean = false
  public movieDetails: any = {}
  public dataForEdit: any
  public data: MovieDetails


  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id !== undefined) {
        this.isEdit = true
        this.readMovieDetails(this.id);
      }
    })
  }

  addMovie() {

    const { title, year, duration, summary, type } = this.movieDetails;

    this.data = {
      title: title,
      year: year,
      summary: summary,
      type: type,
      duration: duration,
    }

    if (this.isEdit === false) {
      this.dataService.addMovie(this.data).subscribe((res) => {
        this.router.navigate(['/showMovies']);
      })
    } else {
      this.dataForEdit = {
        title: title,
        year: year,
        summary: summary,
        type: type,
        duration: duration,
        id: this.id
      }
      this.dataService.updateMovie(this.dataForEdit).subscribe((res) => {
        this.router.navigate(['/details', this.id]);
      })
    }

  }

  readMovieDetails(id: number) {
    this.dataService.readMovie(id).subscribe((data: any) => {
      this.movieDetails = {
        title: data[0].movie_title,
        year: data[0].movie_year,
        summary: data[0].movie_summary,
        type: data[0].movie_type,
        duration: data[0].movie_duration
      }
    })
  }

  // validari

  isValid() {
    return !(this.movieDetails.title && this.movieDetails.year && this.movieDetails.duration && this.movieDetails.summary &&
      this.movieDetails.type && this.isValidTitle(this.movieDetails.title) && this.isValidYear(this.movieDetails.year) &&
      this.isValidDuration(this.movieDetails.duration) && this.isValidSummary(this.movieDetails.summary));
  }

  isValidTitle(title: string) {

    if (title === undefined || (title !== undefined && (title.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase()) === title))) {
      return true
    }
    return false
  }

  isValidYear(year: number) {
    if (year === undefined || (Number.isInteger(Number(year)) && year >= 1900 && year <= this.thisYear)) {
      return true
    }
    return false
  }

  isValidDuration(duration: number) {
    if (duration === undefined || (Number.isInteger(Number(duration)) && duration >= 40 && duration <= 200)) {
      return true
    }
    return false
  }

  isValidSummary(summary) {
    if (summary === undefined || (summary.length >= 10 && summary.length <= 1000)) {
      return true
    }
    return false
  }


}
