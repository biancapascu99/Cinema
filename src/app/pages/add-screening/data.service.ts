import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private REST_API_SERVER = "http://localhost:3000";

    constructor(private httpClient: HttpClient) { }

    public addScreening(payload:any){
        console.log('payload',payload)
        return this.httpClient.post(this.REST_API_SERVER + '/addScreening', payload)
    }
}