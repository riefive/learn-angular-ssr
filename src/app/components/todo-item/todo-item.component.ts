import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() removeTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {
    this.todo = { id: 1, title: '', completed: false }
  }

  ngOnInit(): void {}

  SetClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };
    return classes;
  }

  HandleToggle(todo: Todo) {
    todo.completed = !todo.completed;
    this.todoService
      .EditCompleted(todo)
      .subscribe((todo) => console.log(todo));
  }

  HandleRemove(todo: Todo) {
    this.removeTodo.emit(todo);
  }
}
