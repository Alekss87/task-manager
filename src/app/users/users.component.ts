import { Component, OnInit } from '@angular/core';
import { USERS } from '../models/mock-users';
import { TASKS } from '../models/mock-tasks';
import { TaskModel } from '../models/task.model';
import { UserModel } from '../models/user.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title = 'Task manager';
  
  users = USERS;
  tasks = TASKS;
  
  //task: TaskModel;
  tasksAssigned: TaskModel[] = [];
  tasksNotAssigned: TaskModel[] = [];
  
  selectForm: FormGroup;

  constructor() {
    this.selectForm = new FormGroup({
      task: new FormControl('')
    });
  }

  ngOnInit() {
    this.assignTasks();
  }

  // Split all tasks into assigned and not assigned
  assignTasks() {
    
    this.tasksAssigned = []
    this.tasksNotAssigned = [];

    for (let task of this.tasks) {
      if (!task.isAssigned && !this.tasksNotAssigned.includes(task)) {
        this.tasksNotAssigned.push(task);
      } else if (!this.tasksAssigned.includes(task)) {
        this.tasksAssigned.push(task);
      }
    }
  }

  // Assign task to user
  assign(user: UserModel) {

    const task = this.selectForm.value.task;
    
    if (!user.tasks.includes(task) && task.isAssigned === false) {
      user.tasks.push(task);
      console.log(task.name + ' has been assigned to ' + user.name);
    }
    task.isAssigned = true;
    this.assignTasks();
  }

  // Unassign task from user
  removeTask(user:UserModel, task: TaskModel) {

    task.isAssigned = false;
    user.tasks.splice(user.tasks.indexOf(task), 1);
    this.assignTasks();

    console.log(task.name + ' has been unassigned from ' + user.name);
  }

}
