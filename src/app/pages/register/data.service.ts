import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }
  register(payload: any) {
    return this.httpClient.post(this.REST_API_SERVER + '/register', payload)
  }

}