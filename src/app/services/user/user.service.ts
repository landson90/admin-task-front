import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/i-user';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl!: string
  private usuarioSubject = new BehaviorSubject<IUser>({});

  constructor(

    private httpClient: HttpClient,

    private tokenService: TokenService) {
    this.baseUrl = `${environment.baseUrl}/usuarios`;
    if(this.tokenService.possuiToken()) {
      this.decodeToken()
    }
  }

  private decodeToken() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as IUser;
    this.usuarioSubject.next(user);
  }

  getUser() :Observable<IUser>{
    return this.usuarioSubject.asObservable();
  }

  createUser(user: IUser): Observable<IUser>{
    return this.httpClient.post<IUser>(this.baseUrl, user);
  }

  saveToken(token: string) {
    this.tokenService.saveToken(token);
    this.decodeToken();
  }

  logout() {
    this.tokenService.deleteToken();
    this.usuarioSubject.next({})
  }

  hasToken() {
    return this.tokenService.getToken();
  }
}
