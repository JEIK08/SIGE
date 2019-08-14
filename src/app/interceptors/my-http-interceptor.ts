import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

	constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Server ip: 159.89.51.90
        const mUrl = 'http://159.89.51.90:3000';
        req = req.clone({
            url: mUrl + req.url
        });
		return next.handle(req).pipe(tap((res: any) => {
			if (res.body && res.body.message && res.body.message == 'Fallo la Autenticacion') {
				localStorage.clear();
				this.router.navigate(['login'])
			}
		}));
    }
}
