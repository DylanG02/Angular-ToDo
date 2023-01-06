import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

todos!:Todo[]

inputTodo:string= '';


  ngOnInit(): void {
    this.todos = [
      {
        content: 'first todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      }
    ]
  }

  public toggleDone (id:any) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  public deleteTodo (id:number) {
    this.todos = this.todos.filter((v,i) => i !== id)
  }

  public addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo='';
  }

}
