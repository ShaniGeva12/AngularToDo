import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor() { }

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
    todo.completed = !todo.completed;

  }

  onDelete(todo) {
    console.log('delete');
    
  }

}
