import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Server ip: 159.89.51.90
        const mUrl = 'http://159.89.51.90:3000';
        req = req.clone({
            url: mUrl + req.url
        });
        console.log(req);
        return next.handle(req);
    }
}
