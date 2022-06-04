import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [ ];

  constructor() { }

  ngOnInit(): void {
  }

  public deleteItemTaskList(index: number) {
    this.taskList.splice(index,1)
  }

  public deleteAllTaskList(): void {
    const confirm = window.confirm("Você realmente deseja deletar tudo?")

    if(confirm) {
      this.taskList = []
    }
  }

  public setEmitTaskList(value: string): void {
    this.taskList.push({task: value, checked: false })
  }
}
