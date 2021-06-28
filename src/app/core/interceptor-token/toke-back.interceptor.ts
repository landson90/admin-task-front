import { TokenService } from './../../services/token/token.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokeBackInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.tokenService.getToken();
    if(token !== null) {
      request = request.clone({
        setHeaders: {
          'token': 'Bearer ' +token
        }
      })
    }
    console.log(3, request.headers)
    return next.handle(request);

  }
}
