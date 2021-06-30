import { IPageItem, ITask } from './../../interfaces/i-task';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseUrl!: string;

  constructor(
    private httpClient: HttpClient
    ) {
    this.baseUrl = `${environment.baseUrl}/tarefas`;
  }

 getTasks(id: any, page: number): Observable<IPageItem> {
   return this.httpClient.get<IPageItem>(`${this.baseUrl}/listar/${id}?page=${page}`);
 }

}
