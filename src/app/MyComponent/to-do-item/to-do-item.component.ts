import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Todos } from 'src/app/Todos';


@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input()
  todo: Todos = new Todos;
  color: string[] = ['#ff65a3','#feff9c','#7afcff','#ff7eb9','#fff740'];
  @Output() todoDelete: EventEmitter<Todos> = new EventEmitter; 
  @Output() todoCheck: EventEmitter<Todos> = new EventEmitter; 
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo:Todos) {
    this.todoDelete.emit(todo);
    console.log("delete button click");
  }
  onCheckbox(todo: Todos) {
    this.todoCheck.emit(todo);
    console.log("checkbox button click");
  }
  generatecolor(todo: Todos) {
    var i = Math.floor(Math.random() * this.color.length);
    console.log(this.color[i]);
    const divcard = document.getElementById("card" + todo.sno);
    if (divcard != null) {
      divcard.style.backgroundColor=this.color[i];
    }
    return true;


  }
}
