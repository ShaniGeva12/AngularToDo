import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    
  }

  //Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-completed': this.todo.completed
    }

    return classes;
  }


  onToggle(todo) {
    //console.log('toggle');

    //UI change
    todo.completed = !todo.completed;

    //Server change
    this.todoService.toggleCompleted(todo).subscribe(todo =>
      console.log(todo)
      );

  }

  onDelete(todo) {
    //console.log('delete');
    
    this.deleteTodo.emit(todo);
  }

}
