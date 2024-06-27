import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppService} from "../app.service";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FirstLogService {

    constructor(private http: HttpClient, private appService: AppService) { }

    baseurl: String = "http://localhost:8080/api/miseajour";

    verifyUser(): Observable<any> {
        return this.http.get<any>(`${this.baseurl}/verify-user`);
    }

    changePassword(password: string): Observable<any> {
        const data = { newPassword: password };
        return this.http.post<any>(`${this.baseurl}/authentify-user`, data);
    }
}
