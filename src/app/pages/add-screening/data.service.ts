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

    public readScreening(payload: number) {
        return this.httpClient.get(this.REST_API_SERVER + '/readScreening/' + payload)
    }

    public updateScreening(payload: any) {
        return this.httpClient.post(this.REST_API_SERVER + '/updateScreening', payload)
    }

}