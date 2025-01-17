import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public readSchedule() {
    return this.httpClient.get(this.REST_API_SERVER + '/schedule');
  }

  public deleteScreening(payload: number) {
    console.log(payload)
    return this.httpClient.get(this.REST_API_SERVER + '/deleteScreening/' + payload)
  }
}