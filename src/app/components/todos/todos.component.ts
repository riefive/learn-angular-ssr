import { Component, OnInit, afterNextRender } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';
import { TodoAddComponent } from '../todo-add/todo-add.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoAddComponent, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
    afterNextRender(() => {
      
    });
  }

  ngOnInit(): void {
    this.todoService.GetTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  HandleAddTodo(input: Todo) {
    this.todoService.AddTodo(input).subscribe((todo) => {
      const merges = { ...todo, ...input }
      this.todos.push(merges);
    });
  }

  HandleRemoveTodo(todo: Todo) {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
    this.todoService
      .RemoveTodo(todo)
      .subscribe((todo) => console.log('Deleted, Returns Empty Object!'));
  }
}
