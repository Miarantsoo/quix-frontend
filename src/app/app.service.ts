import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor() { }

    getToken() {
        const token = localStorage.getItem("user");
        return `Bearer ${token}`;
    }

}
