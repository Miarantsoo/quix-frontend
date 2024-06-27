import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {catchError, Observable, of, tap} from 'rxjs';
import { map } from 'rxjs/operators';
import {AppService} from "../app.service";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient, private appService: AppService) { }

    baseUrl: string = "http://localhost:8080/api/utilisateurs";

    login(email: string, password: string): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const loginRequest = { email: email, mdp: password };
        return this.http.post<any>(`${this.baseUrl}/login`, loginRequest, { headers })
    }

    getUserRole(){
        return this.http.get<any>(`${(this.baseUrl)}/get-role`).pipe(
            tap(resolve => resolve),
            catchError(error => {
                console.error('Token validation failed', error);
                return of(null);
            })
        );
    }

    getUser(){
        return this.http.get<any>(`${(this.baseUrl)}/get-user`).pipe(
            tap(resolve => resolve),
            catchError(error => {
                console.error('Token validation failed', error);
                return of(null);
            })
        );
    }

    logout() {
        localStorage.removeItem('user');
    }

    getToken() {
        return localStorage.getItem('user');
    }

}
