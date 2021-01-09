import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private REST_API_SERVER = "http://localhost:3000";

    constructor(private httpClient: HttpClient) { }

    public showTickets(payload:number){
        return this.httpClient.get(this.REST_API_SERVER + '/showTickets/' + payload)
    }
    public deleteTicket(payload:number){
        console.log(payload)
        return this.httpClient.get(this.REST_API_SERVER + '/deleteTicket/' + payload)
    }
}