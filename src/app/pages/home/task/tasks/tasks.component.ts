import { IUser } from 'src/app/interfaces/i-user';
import { UserService } from 'src/app/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task/task.service';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  pageItem = ["Tarefas", "Listar"];
  user!: IUser;

  constructor(
    private taskService: TaskService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getNumberUserToken();
    this.taskService.getTasks(this.user?.sub).subscribe((resp) => {
      console.log(resp)
    },((error) => {console.log(error)}));
  }

  getNumberUserToken() {
    this.userService.getUser().subscribe((resp) => {
      this.user = resp
    })
  }
}
