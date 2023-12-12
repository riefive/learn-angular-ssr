import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string = '';

  constructor() {
  }

  ngOnInit() {}

  HandleSubmit() {
    const todo = {
      title: this.title,
      completed: false,
    };
    this.title = '';
    this.addTodo.emit(todo);
  }
}
