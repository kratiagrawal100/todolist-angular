import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Todos} from 'src/app/Todos'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title: string | undefined
  desc: string | undefined
  @Output() todoAdd: EventEmitter<Todos> = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    const todo = {
      sno:0,
      title: this.title,
      description: this.desc,
      active:true

    }
    this.todoAdd.emit(todo);
  }
}
