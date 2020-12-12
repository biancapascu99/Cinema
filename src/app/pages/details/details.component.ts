import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public actiune:string = "Actiune";
  public actori:string ="Actori"
  constructor() { }

  ngOnInit(): void {
  }

}
