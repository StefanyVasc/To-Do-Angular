import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
    { task: "nova task", checked: true },
    { task: "nova task 2", checked: false },
  ];

  constructor() { }

  ngOnInit(): void {
  }


  public deleteItemTaskList(index: number) {
    this.taskList.splice(index,1)
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Você realmente deseja deletar tudo?")

    if(confirm) {
      this.taskList = []
    }
  }

}
