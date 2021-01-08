import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',
  styleUrls: ['./show-movies.component.css']
})
export class ShowMoviesComponent implements OnInit {

  movies = []
  constructor(private dataService: DataService,  private router: Router) { }

  ngOnInit(): void {
    this.showMovies()
  }

  showMovies() {
    this.dataService.showMovies().subscribe((data: any) => {
      this.movies = data;
     
    })
  }

  deleteMovie(id:number){
    this.dataService.deleteMovie(id).subscribe((res)=>{
      window.location.reload();
    })
   
  }

  editMovie(id:number) {
      this.router.navigate([`/editMovie/${id}`]);
  }
}
