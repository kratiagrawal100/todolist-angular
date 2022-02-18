import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/Todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo: Todos[] = [];
  constructor() {
    const localItem = localStorage.getItem("todo");
    if (localItem == null) {
      this.todo = [];
    }
    else {
      this.todo = JSON.parse(localItem);
    }
    // this.todo = [{
    //   sno: 1,
    //   title: "Learn Angular 1",
    //   description: "Learning skill",
    //   active:true
    // },
    // {
    //   sno: 2,
    //   title: "Learn Angular 2",
    //   description: "Learning skill",
    //   active:true
    //   },
    // {
    //   sno: 3,
    //   title: "Learn Angular 3",
    //   description: "Learning skill",
    //   active:true
    //   },
    // {
    //   sno: 4,
    //   title: "Learn Angular 4",
    //   description: "Learning skill",
    //   active:true
    //   },
    // {
    //   sno: 5,
    //   title: "Learn Angular 5",
    //   description: "Learning skill",
    //   active:true
    //   },
    // {
    //   sno: 6,
    //   title: "Learn Angular 6",
    //   description: "Learning skill",
    //   active:true
    //   }]
   }

  ngOnInit(): void {
  }
  deleteTodo(todo: Todos) {
    const index = this.todo.indexOf(todo);
    this.todo.splice(index,1);
    console.log("deleted parent array");
    localStorage.setItem("todo", JSON.stringify(this.todo));
  
  }
  addTodo(todo: Todos) {
    todo.sno = this.todo.length + 1;
    this.todo.push(todo);
    localStorage.setItem("todo", JSON.stringify(this.todo));
  }
  checkedTodo(todo: Todos) {
    const index = this.todo.indexOf(todo);
    this.todo[index].active=!todo.active;
    localStorage.setItem("todo", JSON.stringify(this.todo));
  }
}
