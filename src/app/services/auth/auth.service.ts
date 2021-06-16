import { UserService } from './../user/user.service';
import { UserLogin } from '../../interfaces/user-login';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IToken } from '../../interfaces/i-token';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl!: string

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
    ) {
    this.baseUrl = `${environment.baseUrl}/auth`;
  }

  login(user: UserLogin): Observable<HttpResponse<any>> {
    return this.httpClient
    .post<IToken>
    (
      this.baseUrl,
       user,
       {
         observe: 'response'
       }
    ).pipe(
      tap((resp) => {

      //  const typeToken = resp.body?.tipo;
        const authToken = resp.body?.token ?? '';
      //  const typeTokenAuth = `${typeToken} ${authToken}`;
        this.userService.saveToken(authToken)
      })
    )
  }
}
