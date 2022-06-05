import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(
    localStorage.getItem('task-list') || '[]'
  );

  constructor() {}

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public deleteItemTaskList(index: number) {
    this.taskList.splice(index, 1);
  }

  public deleteAllTaskList(): void {
    const confirm = window.confirm('Você realmente deseja deletar tudo?');

    if (confirm) {
      this.taskList = [];
    }
  }

  public setEmitTaskList(value: string): void {
    this.taskList.push({ task: value, checked: false });
  }

  public validationInput(task: string, index: number): void {
    console.log(task);
    if (!task.length) {
      alert('essa task vazia será deletada!');
      this.deleteItemTaskList(index);
    }
  }

  public setLocalStorage(): void {
    if (this.taskList) {
      this.taskList.sort(
        (first, last) => Number(first.checked) - Number(last.checked)
      );
      localStorage.setItem('task-list', JSON.stringify(this.taskList));
    }
  }
}
