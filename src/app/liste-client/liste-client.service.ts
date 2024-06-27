import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ListeClientService {

    baseUrl: string = "http://localhost:8080/api/clients/get-all-client";

    constructor(private http: HttpClient) { }

    getAllClients(type: number){
        const typeClient = { typeClient: type };
        return this.http.post<any>(`${this.baseUrl}`, typeClient);
    }

}
