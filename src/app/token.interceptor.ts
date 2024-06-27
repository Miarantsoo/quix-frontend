import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HTTP_INTERCEPTORS
} from '@angular/common/http';


import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AppService} from "./app.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public appService: AppService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        if(this.appService.getToken() != null){
            let req = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${this.appService.getToken()}`)
            });
            return next.handle(req);
        }

        return next.handle(request);
    }
}

export const TokenInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
}