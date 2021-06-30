import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { IUser } from 'src/app/interfaces/i-user';
import { TaskService } from 'src/app/services/task/task.service';
import { UserService } from 'src/app/services/user/user.service';
import { IPageItem, ITask } from './../../../../interfaces/i-task';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit  {

  pageItem = ["Tarefas", "Listar"];
  user!: IUser;
  tasks: ITask[] = [];
  page!: IPageItem;

  maxSize!: number;
  bigTotalItems!: number;
  bigCurrentPag = 2;
  pagina!: number;
  constructor(
    private taskService: TaskService,
    private userService: UserService,
    private _httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.getNumberUserToken()
    this.taskService.getTasks(this.user.sub, 1).subscribe((resp) => {
      console.log(resp)
      this.page = resp
      this.tasks = this.page.content;
      this.maxSize = this.page.totalPages;
      this.bigTotalItems = this.page.totalElements

    });

  }
  getNumberUserToken() {
    this.userService.getUser().subscribe((resp) => {
      this.user = resp
    })
  }

  pageChanged(event: PageChangedEvent): void {

    this.pagina = event.page;
    this.taskService.getTasks(this.user.sub, this.pagina).subscribe((resp) => {
      console.log(resp)
      this.page = resp
      this.tasks = this.page.content;
      this.maxSize = this.page.totalPages;
      this.bigTotalItems = this.page.totalElements

    });
  }


}
