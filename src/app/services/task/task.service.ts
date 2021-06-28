import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

 getTasks(id: any) {
   return this.httpClient.get(`${this.baseUrl}/listar/${id}`);
 }

}
