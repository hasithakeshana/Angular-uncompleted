import { Component } from '@angular/core';

import * as moment from 'moment';

import * as uuid from 'uuid';

//import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 // todoTitle : string;
  title = 'to-do-app';
//  faCoffee = faCoffee;
public picker = new Date();


public newTodo = 'jjj';

todoTitle = 'skskksk';
date = new Date();

now = moment();

public nextEvent;


  todos = [];
  newest = [];



  addTodo(event,time){

    //var timeAndDate = moment(this.date + '' + time);


const dateStr = this.date.toLocaleDateString().split('T').shift();

const timeAndDate = moment(dateStr + ' ' + time).toDate();

console.log('hashi',timeAndDate);

    var newTodo = {
      id : uuid.v4(),
      event : event,
      edit : false,
      date : this.date,
      dateAndTime : timeAndDate
    }


    this.todos.push(newTodo);

    console.log('todos',this.todos);

   // var selectDate = moment();
  //  var NowDate = moment();

    if(moment(timeAndDate).isAfter(this.now)){

      var NowDate = moment(timeAndDate);
      this.newest.push(NowDate);
    }
    console.log('now',this.now);
    console.log('selectdate',timeAndDate);

    console.log('newsest',this.newest);

   var latestDate =  moment.min(this.newest);

   console.log('latestDate',latestDate);

   this.nextEvent = latestDate.toString();



  }

  deleteTodo(todo){
      this.todos = this.todos.filter(t => t.id !== todo.id);
      console.log('todos',this.todos);

      // todo  - delete record from the newest array as well
  }

  editTodo(todo){
    console.log('todo edit',todo.id);

    const FilteredItems = this.todos.filter(item => item.id !== todo.id);

    console.log('FilteredItems',FilteredItems);

    const selectedItem = this.todos.find(item => item.id === todo.id);

    console.log('selectedItem',selectedItem);

    this.todos = FilteredItems;




  }

  getDate(date)
  {
    console.log('date',date);


  }

  events: string[] = [];

  addEvent(type: string, event) {
    this.events.push(`${type}: ${event.value}`);

    console.log(event.value);

    this.date = event.value;

  //  console.log(this.date.setHours(1));
   // this.date.setMinutes(10);
    console.log(this.date);

    //var x = this.date.toISOString();

    //console.log('xxxxxxxxxxxxxxxxxxxxxxxxx',x);
  }


}
