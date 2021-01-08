import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private REST_API_SERVER = "http://localhost:3000";

    constructor(private httpClient: HttpClient) { }

    public addMovie(payload: any) {
        return this.httpClient.post(this.REST_API_SERVER + '/addMovie', payload)
    }

    public readMovie(payload: number) {
        return this.httpClient.get(this.REST_API_SERVER + '/readMovie/' + payload)
    }

    public updateMovie(payload: any) {  
        console.log(payload)
        return this.httpClient.post(this.REST_API_SERVER + '/updateMovie', payload)
    }
}