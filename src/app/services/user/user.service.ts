import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/i-user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl!: string

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${environment.baseUrl}/usuarios`;
  }

  createUser(user: IUser): Observable<IUser>{
    return this.httpClient.post<IUser>(this.baseUrl, user);
  }
}
