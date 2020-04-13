import { Component } from '@angular/core';

//import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do-app';
//  faCoffee = faCoffee;
public picker = new Date();

date = new Date();


  todos = [];

  addTodo(newTodoLabel,time){
    var newTodo = {
      label : newTodoLabel,
      priority : 1,
      done : false,
      date : this.date,
      time : time
    }


    this.todos.push(newTodo);
    console.log(this.todos);
  }

  deleteTodo(todo){
      this.todos = this.todos.filter(t => t.label !== todo.label);
  }

  getDate(date)
  {
    console.log(date);
    var x = date.toISOString();

    console.log('xxxxxxxxxxxxxxxxxxxxxxxxx',x);

  }

  events: string[] = [];

  addEvent(type: string, event) {
    this.events.push(`${type}: ${event.value}`);

    console.log(event.value);

    this.date = event.value;

    console.log(this.date);
  }


}
