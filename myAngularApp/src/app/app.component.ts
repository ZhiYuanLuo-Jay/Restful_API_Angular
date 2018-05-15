import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'; //(1) Import the HttpService 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Restful Task API';
  tasks = [];
  task = '';
  snacks: string[];
  loggedIn: boolean;

  constructor(private _httpService: HttpService){};  // (2) Make HttpService as an attribute in the class.

  ngOnInit(){
    this.getTasksFromService();
    this.getTasksFromServiceById();
    this.snacks = ["vanilla latte with skim milk", "brushed suede", "cookie"];
    this.loggedIn = true;
  }
  getTasksFromService(){
    let obserable = this._httpService.getTasks();
    obserable.subscribe(data => {
    // console.log("Got our tasks!", data);
    this.tasks = data['data'];
    console.log("stored in attributes", this.tasks);
    });
    
  }

  getTasksFromServiceById(){
    let showOne = this._httpService.getTaskById();
    showOne.subscribe(data => {
      // console.log("Got out task by Id", data);
      this.task = data['info']['description'];
      console.log("retrieved by ID, store in attribute: ",this.task);
    });
  }


}
