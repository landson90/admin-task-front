import { UserLogin } from '../../interfaces/user-login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IToken } from '../../interfaces/i-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl!: string

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${environment.baseUrl}/auth`;
  }

  login(user: UserLogin): Observable<IToken> {
    return this.httpClient.post<IToken>(this.baseUrl, user);
  }
}
