import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private REST_API_SERVER = "http://localhost:3000";

    constructor(private httpClient: HttpClient) { }

    public addRoom(payload: any) {
        return this.httpClient.post(this.REST_API_SERVER + '/addRoom', payload)
    }

    public readRoom(payload: number) {
        return this.httpClient.get(this.REST_API_SERVER + '/readRoom/' + payload)
    }

    public updateRoom(payload: any) {
        return this.httpClient.post(this.REST_API_SERVER + '/updateRoom', payload)
    }
}